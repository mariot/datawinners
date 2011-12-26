# vim: ai ts=4 sts=4 et sw=4 encoding=utf-8
import datetime
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.utils import translation
from django.utils.translation import ugettext
from django.views.decorators.csrf import csrf_view_exempt, csrf_response_exempt
from django.views.decorators.http import require_http_methods

from mangrove.errors.MangroveException import MangroveException
from mangrove.form_model.form_model import get_form_model_by_code
from mangrove.transport.player.parser import SMSParserFactory
from mangrove.transport.player.player import SMSPlayer
from mangrove.transport import TransportInfo

from datawinners.accountmanagement.models import   TEST_REPORTER_MOBILE_NUMBER
from datawinners.location.LocationTree import get_location_tree
from datawinners.main.utils import  get_db_manager_for, get_organization_settings_for
from datawinners.messageprovider.messages import SMS
from datawinners.submission.models import DatawinnerLog, SMSResponse
from datawinners.messageprovider.message_handler import get_exception_message_for

import logging
from location.LocationTree import get_location_hierarchy
from datawinners.utils import get_organization
from submission.request_processor import    MangroveWebSMSRequestProcessor
from submission.submission_utils import PostSMSProcessorLanguageActivator
from utils import get_organization_settings_from_request
from mangrove.transport.facade import Request
from messageprovider.exception_handler import handle

logger = logging.getLogger("django")

@csrf_view_exempt
@csrf_response_exempt
@require_http_methods(['POST'])
def sms(request):
    message = Responder().respond(request)
    return HttpResponse(message)

@login_required(login_url='/login')
@csrf_view_exempt
@csrf_response_exempt
@require_http_methods(['POST'])
def web_sms(request):
    message = Responder(next_state_processor=find_dbm_for_web_sms).respond(request)
    return HttpResponse(message)

def find_dbm(request):
    _from, _to = _get_from_and_to_numbers(request) #This is the http post request. After this state, the request being sent is a python dictionary
    incoming_request = {'incoming_message': request.POST["message"],
                        'datawinner_log': DatawinnerLog(message=request.POST["message"], from_number=_from,
                            to_number=_to)}

    if _to is None:
        incoming_request['outgoing_message'] = ugettext("Your organization does not have a telephone number assigned. Please contact DataWinners Support.")
        return incoming_request
    incoming_request['transport_info'] = TransportInfo(transport=SMS, source=_from, destination=_to)
    try:
        incoming_request['dbm'] = get_db_manager_for(_from, _to)

    except MangroveException as exception:
        message = get_exception_message_for(exception=exception, channel=SMS)
        incoming_request['outgoing_message'] = incoming_request['datawinner_log'].error = message
        incoming_request['datawinner_log'].save()
        return incoming_request

    incoming_request['organization'] = _find_organization(request)
    incoming_request['next_state'] = process_sms_counter
    return incoming_request

class Responder(object):

    def __init__(self,next_state_processor=find_dbm):
        self.next_state_processor = next_state_processor

    def respond(self, incoming_request):
        request = self.next_state_processor(incoming_request)
        if request.get('outgoing_message'):
            return request['outgoing_message']

        self.next_state_processor = request['next_state']
        return self.respond(request)



def find_dbm_for_web_sms(request):
    incoming_request = dict()
    MangroveWebSMSRequestProcessor().process(http_request=request,mangrove_request=incoming_request)
    incoming_request['organization'] = get_organization(request)
    incoming_request['next_state'] = process_sms_counter
    return incoming_request


def process_sms_counter(incoming_request):
    organization =incoming_request['organization']
    organization.increment_all_message_count()
    if organization.has_exceeded_message_limit():
        incoming_request['outgoing_message'] = ugettext("You have used up your 100 SMS for the trial account. Please upgrade to a monthly subscription to continue sending in data to your projects.")
        return incoming_request

    incoming_request['next_state'] = submit_to_player
    return incoming_request

def submit_to_player(incoming_request):
    try:
        sms_player = SMSPlayer(incoming_request['dbm'], get_location_tree(), get_location_hierarchy=get_location_hierarchy,post_sms_parser_processors=[PostSMSProcessorLanguageActivator(incoming_request['dbm'],incoming_request)])
        mangrove_request = Request(message=incoming_request['incoming_message'], transportInfo=incoming_request['transport_info'])
        response = sms_player.accept(mangrove_request)
        message = SMSResponse(response).text()
    except Exception as exception:
        message = handle(exception, incoming_request)

    incoming_request['outgoing_message'] = message
    return incoming_request


def _test_mode_numbers(request):
    _to = get_organization_settings_from_request(request).get_organisation_sms_number()
    _from = TEST_REPORTER_MOBILE_NUMBER
    return _from, _to


def _get_from_and_to_numbers(request):
    _from = request.POST["from_msisdn"]
    _to = request.POST["to_msisdn"]
    return _from, _to

def _find_organization(request):
    _from = request.POST["from_msisdn"]
    _to = request.POST["to_msisdn"]
    return get_organization_settings_for(_from, _to).organization
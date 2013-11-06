from collections import defaultdict
import json
from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.core.urlresolvers import reverse
from django.utils import translation
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_view_exempt, csrf_response_exempt
from django.utils.translation import ugettext as _, ugettext
from django.views.generic.base import TemplateView, View, RedirectView
import jsonpickle

from datawinners import utils
from datawinners.accountmanagement.decorators import is_datasender, session_not_expired, is_not_expired, is_new_user
from datawinners.entity.data_sender import remove_system_datasenders, get_datasender_user_detail
from datawinners.entity.views import _get_full_name, log_activity, get_success_message
from datawinners.main.database import get_database_manager
from datawinners.accountmanagement.models import NGOUserProfile, get_ngo_admin_user_profiles_for
from datawinners.entity.helper import add_imported_data_sender_to_trial_organization, delete_entity_instance, delete_datasender_users_if_any, delete_datasender_for_trial_mode, reporter_id_list_of_all_users, rep_id_name_dict_of_superusers
from datawinners.project.models import get_all_projects, Project, delete_datasenders_from_project
from datawinners.entity import import_data as import_module
from datawinners.project.views.datasenders import _parse_successful_imports, _add_imported_datasenders_to_trail_account
from datawinners.search.entity_search import DatasenderQuery
from mangrove.form_model.form_model import REPORTER, header_fields, GLOBAL_REGISTRATION_FORM_ENTITY_TYPE
from mangrove.transport import TransportInfo
from mangrove.utils.types import is_empty
from datawinners.utils import get_organization_from_manager, get_organization
from mangrove.transport.player.parser import XlsDatasenderParser
from datawinners.activitylog.models import UserActivityLog
from datawinners.common.constant import IMPORTED_DATA_SENDERS, ADDED_DATA_SENDERS_TO_PROJECTS, REMOVED_DATA_SENDER_TO_PROJECTS, DELETED_DATA_SENDERS


class AllDataSendersView(TemplateView):
    template_name = 'entity/all_datasenders.html'

    def get(self, request, *args, **kwargs):
        manager = get_database_manager(request.user)
        projects = get_all_projects(manager)
        in_trial_mode = utils.get_organization(request).in_trial_mode
        user_rep_ids = reporter_id_list_of_all_users(manager)

        return self.render_to_response({
            "users_list": user_rep_ids,
            "projects": projects,
            'current_language': translation.get_language(),
            'in_trial_mode': in_trial_mode
        })

    def post(self, request, *args, **kwargs):
        manager = get_database_manager(request.user)
        error_message, failure_imports, success_message, imported_datasenders, successful_imports = import_module.import_data(request,
                                                                                                          manager,
                                                                                                          default_parser=XlsDatasenderParser)
        imported_data_senders = _parse_successful_imports(successful_imports)
        imported_datasenders_ids = [imported_data_sender["id"] for imported_data_sender in imported_data_senders]
        if len(imported_datasenders_ids):
            UserActivityLog().log(request, action=IMPORTED_DATA_SENDERS,
                                  detail=json.dumps(
                                      dict({"Unique ID": "[%s]" % ", ".join(imported_datasenders_ids)})))
        org_id = request.user.get_profile().org_id
        _add_imported_datasenders_to_trail_account(imported_data_senders, org_id)
        return HttpResponse(json.dumps(
            {
                'success': error_message is None and is_empty(failure_imports),
                'message': success_message,
                'error_message': error_message,
                'failure_imports': failure_imports,
                'successful_imports': imported_data_senders
            }))

    @method_decorator(csrf_view_exempt)
    @method_decorator(csrf_response_exempt)
    @method_decorator(login_required)
    @method_decorator(session_not_expired)
    @method_decorator(is_datasender)
    @method_decorator(is_not_expired)
    def dispatch(self, *args, **kwargs):
        return super(AllDataSendersView, self).dispatch(*args, **kwargs)

    def _get_all_datasenders(self, manager, projects, user):
        all_data_senders, fields, labels = import_module.load_all_entities_of_type(manager)
        project_association = self._get_project_association(projects)
        remove_system_datasenders(all_data_senders)
        for datasender in all_data_senders:
            get_datasender_user_detail(datasender, user)
            datasender['projects'] = project_association.get(datasender['short_code'])
        return all_data_senders

    def _get_project_association(self, projects):
        project_association = defaultdict(list)
        for project in projects:
            for datasender in project['value']['data_senders']:
                project_association[datasender].append(project['value']['name'])
        return project_association

class AllDataSendersAjaxView(View):

   def get(self, request, *args, **kwargs):
        search_parameters = {}
        search_text = request.GET.get('sSearch', '').strip()
        search_parameters.update({"search_text": search_text})
        search_parameters.update({"start_result_number": int(request.GET.get('iDisplayStart'))})
        search_parameters.update({"number_of_results": int(request.GET.get('iDisplayLength'))})
        search_parameters.update({"order_by": int(request.GET.get('iSortCol_0')) - 1})
        search_parameters.update({"order": "-" if request.GET.get('sSortDir_0') == "desc" else ""})

        user = request.user
        query_count, search_count, datasenders = DatasenderQuery().paginated_query(user, REPORTER, search_parameters)

        return HttpResponse(
            jsonpickle.encode(
                {
                    'data': datasenders,
                    'iTotalDisplayRecords': query_count,
                    'iDisplayStart': int(request.GET.get('iDisplayStart')),
                    "iTotalRecords": search_count,
                    'iDisplayLength': int(request.GET.get('iDisplayLength'))
                }, unpicklable=False), content_type='application/json')

   @method_decorator(login_required)
   @method_decorator(session_not_expired)
   @method_decorator(is_not_expired)
   def dispatch(self, *args, **kwargs):
        return super(AllDataSendersAjaxView, self).dispatch(*args, **kwargs)


class DataSenderActionView(View):

    def _get_projects(self, manager, request):
        project_ids = request.POST.get('project_id').split(';')
        projects = []
        for project_id in project_ids:
            project = Project.load(manager.database, project_id)
            if project is not None:
                projects.append(project)
        return projects

    @method_decorator(login_required)
    @method_decorator(session_not_expired)
    @method_decorator(is_not_expired)
    @method_decorator(is_new_user)
    def dispatch(self, *args, **kwargs):
        return super(DataSenderActionView, self).dispatch(*args, **kwargs)


def data_sender_short_codes(request, manager):
    if request.POST.get("all_selected") == 'true':
        search_query = request.POST.get('search_query')
        datasender_list = DatasenderQuery().query(request.user, search_query)
        fields = header_fields(manager, GLOBAL_REGISTRATION_FORM_ENTITY_TYPE).keys()
        fields.remove("entity_type")
        short_code_index = fields.index("short_code")
        return [s[short_code_index] for s in datasender_list]

    return request.POST['ids'].split(';')


class AssociateDataSendersView(DataSenderActionView):

    def post(self, request, *args, **kwargs):
        manager = get_database_manager(request.user)
        projects = self._get_projects(manager, request)
        projects_name = []
        for project in projects:
            project.data_senders.extend([id for id in data_sender_short_codes(request, manager) if not id in project.data_senders])
            projects_name.append(project.name.capitalize())
            project.save(manager)
        ids = request.POST["ids"].split(';')
        if len(ids):
            UserActivityLog().log(request, action=ADDED_DATA_SENDERS_TO_PROJECTS,
                                  detail=json.dumps({"Unique ID": "[%s]" % ", ".join(ids),
                                                     "Projects": "[%s]" % ", ".join(projects_name)}))

        return HttpResponse(json.dumps({"success": True, "message": _("The Data Sender(s) are added to project(s) successfully")}))


class DisassociateDataSendersView(DataSenderActionView):

    def responseMessage(self, selected_rep_ids, superusers_selected):
        message = _("The Data Sender(s) are removed from project(s) successfully")
        superuser_count = len(superusers_selected)

        if len(selected_rep_ids) == superuser_count:
            message = _("Note, the following Data Senders were not removed as they are DataWinners users: ") + \
                      ', '.join(superusers_selected)
        elif superuser_count > 0:
            message = _("The Data Sender(s) are removed from project(s) successfully") + ". " + \
                      _("Note, the following Data Senders were not removed as they are DataWinners users: ") + \
                      ', '.join(superusers_selected)
        return message

    def post(self, request, *args, **kwargs):
        manager = get_database_manager(request.user)
        projects = self._get_projects(manager, request)
        projects_name = []
        removed_rep_ids = []
        selected_rep_ids = data_sender_short_codes(request, manager)
        superusers = rep_id_name_dict_of_superusers(manager)
        superusers_selected = []

        non_superuser_selected = []
        for rep_id in selected_rep_ids:
            if rep_id in superusers.keys():
                superusers_selected.append(superusers[rep_id])
            else:
                non_superuser_selected.append(rep_id)

        for rep_id in non_superuser_selected:
            project_has_repid = False
            for project in projects:
                if rep_id in project.data_senders:
                    project.delete_datasender(manager, rep_id)
                    project.save(manager)
                    projects_name.append(project.name.capitalize())
                    project_has_repid = True
            if project_has_repid:
                removed_rep_ids.append(rep_id)

        if len(removed_rep_ids):
            UserActivityLog().log(request, action=REMOVED_DATA_SENDER_TO_PROJECTS,
                                  detail=json.dumps({"Unique ID": "[%s]" % ", ".join(removed_rep_ids),
                                                     "Projects": "[%s]" % ", ".join(projects_name)}))

        message = self.responseMessage(selected_rep_ids, superusers_selected)

        return HttpResponse(json.dumps({"success": True, "message": message}))


@csrf_view_exempt
@csrf_response_exempt
@login_required(login_url='/login')
@is_datasender
def delete_data_senders(request):
    ''' The id's that we get from the front end will always be a subset and we will never have a use case where all elements
     displayed are selected for delete operation as we can never delete the admin's which are also data senders which is implemented
     via a validation in javascript.
    '''
    manager = get_database_manager(request.user)
    organization = get_organization(request)
    entity_type = request.POST['entity_type']
    all_ids = data_sender_short_codes(request, manager)
    ngo_admin_user_profile = get_ngo_admin_user_profiles_for(organization)[0]
    if ngo_admin_user_profile.reporter_id in all_ids:
        messages = _("Your organization's account Administrator %s cannot be deleted") % (_get_full_name(ngo_admin_user_profile.user))
        return HttpResponse(json.dumps({'success': False, 'message':messages}))
    else:
        transport_info = TransportInfo("web", request.user.username, "")
        delete_datasenders_from_project(manager, all_ids)
        delete_entity_instance(manager, all_ids, entity_type, transport_info)
        delete_datasender_users_if_any(all_ids, organization)
        if organization.in_trial_mode:
            delete_datasender_for_trial_mode(manager, all_ids, entity_type)
        log_activity(request, DELETED_DATA_SENDERS, "%s: [%s]" % (entity_type.capitalize(), ", ".join(all_ids)), )
        messages = get_success_message(entity_type)
        return HttpResponse(json.dumps({'success': True, 'message':messages}))

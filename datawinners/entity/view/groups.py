import json

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.utils.translation import ugettext
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Search

from datawinners.accountmanagement.decorators import session_not_expired, is_datasender, is_not_expired
from datawinners.entity.group_helper import get_group_details
from datawinners.main.database import get_database_manager
from datawinners.search.all_datasender_search import get_all_datasenders_short_codes, get_all_datasenders_search_results
from mangrove.datastore.entity import contact_by_short_code


@login_required
@session_not_expired
@is_datasender
@is_not_expired
def get_group_names(request):
    dbm = get_database_manager(request.user)
    group_names = get_group_details(dbm)
    return HttpResponse(json.dumps({'group_names': group_names}), content_type="application/json")


def _update_group_for_contacts(contact_ids, dbm, group_names, action):
    for contact_id in contact_ids:
        contact = contact_by_short_code(dbm, contact_id)
        action_to_perform = contact.add_custom_group if action == 'add' else contact.remove_custom_group
        for group_name in group_names:
            action_to_perform(group_name)
        contact.save()


@login_required
@session_not_expired
@is_datasender
@is_not_expired
def add_or_remove_contact_from_groups(request):
    dbm = get_database_manager(request.user)
    group_names = json.loads(request.POST['group-names'])
    current_group_name = request.POST['current_group_name']
    contact_ids = json.loads(request.POST['contact_ids'])
    all_selected = json.loads(request.POST['all_selected'])
    action = request.POST['action']
    success = True
    try:
        if not all_selected:
            _update_group_for_contacts(contact_ids, dbm, group_names, action)
        else:
            search_query = request.POST['search_query']
            contact_ids = _get_reporter_ids_for_group_name(dbm, current_group_name, search_query)
            _update_group_for_contacts(contact_ids, dbm, group_names, action)
        message = 'The Contact(s) are added to Group(s) successfully.' if action == 'add' else 'The Contact(s) are removed from Group(s) successfully.'
    except Exception as e:
        # log exception
        message = ugettext('Failed to add in to group.')
        success = False
    return HttpResponse(content=json.dumps({'success': success, 'message': ugettext(message)}), content_type='application/json')


def _get_reporter_ids_for_group_name(dbm, group_name, search_query):
    search_parameters = {'search_filter': {'group_name': group_name, 'search_text': search_query}}
    return get_all_datasenders_short_codes(dbm, search_parameters)


def _get_all_data_senders_short_codes(dbm, search_parameters):
    search_parameters['response_fields'] = ['short_code']
    search_results = get_all_datasenders_search_results(dbm, search_parameters)
    return [item['short_code'] for item in search_results.hits]


def _get_reporter_ids_for_group_name(dbm, group_name, search_query):
    search_parameters = {'search_filter': {'group_name': group_name, 'search_text': search_query}}
    return _get_all_data_senders_short_codes(dbm, search_parameters)


@login_required
@session_not_expired
@is_datasender
@is_not_expired
def group_ds_count(request):
    dbm = get_database_manager(request.user)
    groups = []
    group_details = get_group_details(dbm)
    for group_detail in group_details:
        name = group_detail['name']
        group_count = _get_data_sender_count_for_groups(dbm, name)
        groups.append({'count': group_count, 'name': name})
    return HttpResponse(content_type='application/json', content=json.dumps({'groups': groups}))


def _get_data_sender_count_for_groups(dbm, group_name):
    es = Elasticsearch()
    search = Search(using=es, index=dbm.database_name, doc_type='reporter')
    search = search.query("term", customgroups_value=group_name.lower())
    search = search.query("term", void=False)
    body = search.to_dict()
    return es.search(index=dbm.database_name, doc_type='reporter', body=body, search_type='count')['hits']['total']
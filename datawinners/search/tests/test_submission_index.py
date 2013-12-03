import unittest
import elasticutils
from mock import Mock, PropertyMock, patch
from datawinners.search.submission_index_helper import SubmissionIndexUpdateHandler
from datawinners.search.submission_search import SubmissionQueryBuilder
from mangrove.datastore.database import DatabaseManager
from mangrove.datastore.entity import Entity
from mangrove.form_model.field import TextField
from mangrove.form_model.form_model import FormModel
from datawinners.search.submission_index import _update_with_form_model_fields, update_submission_search_for_subject_edition
from mangrove.datastore.documents import EnrichedSurveyResponseDocument


class TestSubmissionIndex(unittest.TestCase):
    def setUp(self):
        self.form_model = Mock(FormModel)
        mock_field = Mock(TextField)
        mock_field.is_entity_field = True
        mock_field.code = 'EID'
        self.form_model.fields = [mock_field]

    def test_should_update_search_dict_with_form_field_questions_for_success_submissions(self):
        search_dict = {}
        values = {'eid': {'answer': {'deleted': False, 'id': 'cid005', 'name': 'Test'}, 'is_entity_question': 'true'},
                  'q2': {'answer': 'name', 'type': 'text', 'label': 'First Name'},
                  'q3': {'answer': {u'b': 'two', u'c': 'three'}, 'type': 'select', 'label': 'Question 2'},
                  'q4': {'answer': '3,3', 'type': 'geocode', 'label': 'gps'},
                  'q5': {'answer': '11.12.2012', 'format': 'mm.dd.yyyy', 'type': 'date', 'label': 'date'}}
        submission_doc = EnrichedSurveyResponseDocument(values=values, status="success")
        _update_with_form_model_fields(None, submission_doc, search_dict, self.form_model)
        self.assertEquals({'eid': 'Test', "entity_short_code": "cid005", 'q2': 'name', 'q3': 'three,two', 'q4': '3,3',
                           'q5': '11.12.2012', 'void': False}, search_dict)

    def test_should_update_search_dict_with_form_field_questions_for_error_submissions(self):
        search_dict = {}
        values = {'q2': 'wrong number', 'q3': 'wrong text'}
        submission_doc = EnrichedSurveyResponseDocument(values=values, status="error")
        _update_with_form_model_fields(None, submission_doc, search_dict, self.form_model)
        self.assertEquals({'q2': 'wrong number', 'q3': 'wrong text', 'void': False}, search_dict)

    def test_should_update_entity_field_in_submission_index(self):
        entity_doc = Mock(spec=Entity)
        dbm = Mock(spec=DatabaseManager)
        data = {'name': {'value': 'bangalore'}}
        type(dbm).database_name = PropertyMock(return_value='db_name')
        type(entity_doc).entity_type = PropertyMock(return_value=['Clinic'])
        type(entity_doc).short_code = PropertyMock(return_value='cli001')
        type(entity_doc).data = PropertyMock(return_value=data)

        with patch(
                'datawinners.search.submission_index._get_form_models_from_projects') as get_form_models_from_projects:
            with patch.object(SubmissionQueryBuilder, 'query_all') as query_all:
                form_model1 = Mock(spec=FormModel)
                entity_name = Mock()
                type(entity_name).code = PropertyMock(return_value='q1')
                type(form_model1).entity_question = PropertyMock(return_value=entity_name)
                get_form_models_from_projects.return_value = [form_model1]
                with patch.object(dbm, "load_all_rows_in_view") as load_all_rows_in_view:
                    load_all_rows_in_view.return_value = []
                    survey_response_index1 = Mock(_id='id1')
                    filtered_query = Mock(spec=elasticutils.S)
                    filtered_query.all.return_value = [survey_response_index1]

                    query_all.return_value = filtered_query

                    with patch.object(SubmissionIndexUpdateHandler,
                                      'update_field_in_submission_index') as update_field_in_submission_index:
                        update_submission_search_for_subject_edition(entity_doc, dbm)
                        query_all.assert_called_with('db_name', **{'entity_short_code': 'cli001'})
                        update_field_in_submission_index.assert_called_with('id1', {'q1': 'bangalore'})
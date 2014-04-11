import json
import unittest

from nose.plugins.attrib import attr
from django.test import Client
from framework.utils.common_utils import random_string
from testdata.constants import SENDER, RECEIVER, SMS
from tests.submissionlogtests.submission_log_tests import send_valid_sms_with
from tests.testdatasetup.project import create_multi_choice_project

form_code = random_string()
VALID_SMS_BLOOD_A = {SENDER: '1234123413', RECEIVER: '919880734937', SMS: "%s a" % form_code, }


@attr('functional_test')
class TestAnalysisStats(unittest.TestCase):
    def test_get_stats(self):
        self.client = Client()
        self.client.login(username='tester150411@gmail.com', password='tester150411')

        create_multi_choice_project(self.client, form_code)
        for option in ["a", "b", "d", "a"]:
            send_valid_sms_with({SENDER: '1234123413', RECEIVER: '919880734937', SMS: "%s %s" % (form_code, option)})

        data = {"search_filters": "{\"search_text\":\"\",\"dateQuestionFilters\":{}}"}
        res = self.client.post("/project/submissions/%s/analysis" % form_code, data)
        expected = set([(2, "A"), (1, "B"), (0, "AB"), (1, "O")])
        response = json.loads(res.content)
        actual_stat = set([(i["count"], i["term"]) for i in response['result'].get('Blood Group').get('data')])
        self.assertEquals(actual_stat, expected)
        self.assertEquals(response['result'].get('Blood Group').get('field_type'), 'select1')




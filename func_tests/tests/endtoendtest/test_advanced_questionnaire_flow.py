import json
import os
import re

from nose.plugins.attrib import attr
from django.test import Client

from framework.base_test import HeadlessRunnerTest

from framework.utils.common_utils import random_string, by_css, generate_random_email_id
from pages.dataanalysispage.data_analysis_page import DataAnalysisPage
from pages.datasenderpage.data_sender_page import DataSenderPage
from pages.loginpage.login_page import login
from pages.resetpasswordpage.reset_password_page import ResetPasswordPage
from testdata.test_data import url
from tests.activateaccounttests.activate_account_data import DS_ACTIVATION_URL, NEW_PASSWORD
from tests.alldatasenderstests.add_data_senders_data import VALID_DATA_WITH_EMAIL
from tests.logintests.login_data import VALID_CREDENTIALS
from tests.testsettings import UI_TEST_TIMEOUT


DIR = os.path.dirname(__file__)

regex_date_match = '\S{3}\.\W\d{2}\,\W\d{4}\,\W\d{2}:\d{2}\W\S{2}'
TRIAL_DATA = 'Tester Pune rep276 ' + regex_date_match + ' Success name multiline text 8 11.0 8 12.08.2016 04.2014 2016 option a,option c option a,option b option 8 option 5 Don\'t Know option 8 agree option d option a,option b,option c,option d option d   Don\'t Know Don\'t Know Don\'t Know Don\'t Know sad happy sad happy United States New York City Harlem The Netherlands Rotterdam Downtown 9.9,8.8 10.1,9.9 recoring nuthatch -3 Grand Cape Mount County Commonwealth 2 "What is your...\n: name1", "What is your...\n: 60";'


class TestAdvancedQuestionnaireEndToEnd(HeadlessRunnerTest):

    def setUp(self):
        self.test_data = os.path.join(DIR, 'testdata')
        self.global_navigation_page = login(self.driver, VALID_CREDENTIALS)
        self.client = Client()

    @attr('smoke')
    def test_should_create_project_when_xlsform_is_uploaded(self):
        project_name = random_string()
        form_code = project_name[0:3]
        self.client.login(username='tester150411@gmail.com', password='tester150411')

        self._verify_questionnaire_creation(form_code, project_name)
        form, web_submission_page = self._verify_web_submission_page_is_loaded(project_name)
        self._do_web_submission(form, form_code)
        self._verify_submission_log_page(web_submission_page)
        self._register_datasender()

        self.driver.wait_for_page_with_title(UI_TEST_TIMEOUT, "Data Submission")

        datasender_page = DataSenderPage(self.driver)
        datasender_page.send_in_data()

    def _activate_datasender(self, email):
        r = self.client.post(path='/admin-apis/datasender/generate_token/', data={'ds_email': email})
        resp = json.loads(r._container[0])
        self.driver.go_to(url(DS_ACTIVATION_URL % (resp["user_id"], resp["token"])))
        activation_page = ResetPasswordPage(self.driver)
        activation_page.type_same_password(NEW_PASSWORD)
        activation_page.click_submit()

    def _verify_web_submission_page_is_loaded(self, project_name):
        all_data_page = self.global_navigation_page.navigate_to_all_data_page()
        web_submission_page = all_data_page.navigate_to_web_submission_page(project_name)
        form = self.driver.wait_for_element(UI_TEST_TIMEOUT, by_css("form"), True)
        self.driver.wait_until_element_is_not_present(UI_TEST_TIMEOUT, by_css(".ajax-loader"))
        return form, web_submission_page

    def _do_web_submission(self, form, form_code):
        project_temp_name = form.get_attribute('id')
        submission_data = open(os.path.join(self.test_data, 'submission_data.xml'), 'r').read()
        submission_data = re.sub("tmpW3OW1B", project_temp_name, submission_data)
        submission_data = re.sub("<form_code>010", "<form_code>" + form_code, submission_data)
        r = self.client.post(path='/xlsform/web_submission/', data={'form_data': submission_data})
        self.assertEquals(r.status_code, 201)
        self.assertNotEqual(r._container[0].find('submission_uuid'), -1)

    def _verify_submission_log_page(self, web_submission_page):
        self.submission_log_page = web_submission_page.navigate_to_submission_log()
        submission = self.submission_log_page.get_all_data_on_nth_row(1)
        self.assertRegexpMatches(" ".join(submission), TRIAL_DATA)

    def _verify_questionnaire_creation(self, form_code, project_name):
        r = self.client.post(
            path='/xlsform/upload/?pname=' + project_name + '&qqfile=text_and_integer.xls&form_code=' + form_code,
            data=open(os.path.join(self.test_data, 'ft_advanced_questionnaire.xls'), 'r').read(),
            content_type='application/octet-stream')
        self.assertEquals(r.status_code, 200)
        self.assertNotEqual(r._container[0].find('project_name'), -1)

    def _register_datasender(self):
        data_sender_page = self.submission_log_page.navigate_to_datasenders_page()
        add_data_sender_page = data_sender_page.navigate_to_add_a_data_sender_page()
        email = generate_random_email_id()
        add_data_sender_page.enter_data_sender_details_from(VALID_DATA_WITH_EMAIL, email=email)
        success_msg = add_data_sender_page.get_success_message()
        self.assertIn("Registration successful. ID is: ", success_msg)
        self._activate_datasender(email)

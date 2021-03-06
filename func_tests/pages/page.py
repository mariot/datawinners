# vim: ai ts=4 sts=4 et sw=4 encoding=utf-8
from Tkconstants import TRUE
from tests.testsettings import WAIT, UI_TEST_TIMEOUT


class Page(object):
    def __init__(self, driver):
        self.driver = driver
        self.url = self.driver.current_url
        self.driver.implicitly_wait(WAIT)

    def switch_language(self, language):
        from framework.utils.common_utils import by_css
        locator = by_css("a[href='/switch/%s/']" % language)
        self.driver.find(locator).click()

    def refresh(self):
        self.driver.refresh()

    def is_help_button_present(self):
        from framework.utils.common_utils import by_id
        locator = by_id("need_help_button")
        self.driver.wait_for_element(UI_TEST_TIMEOUT, locator, True)

        return self.driver.is_element_present(locator)

    def is_help_content_available(self):
        if not self.is_help_button_present():
            return False

        import datetime
        from framework.utils.common_utils import by_id
        start_time = datetime.datetime.now()
        locator = by_id("need_help_button")
        self.driver.find(locator).click()
        iframe = self.driver.find(by_id('div_iframe'))
        end_time = start_time + datetime.timedelta(0, 120)

        while True:
            try:
                current_time = datetime.datetime.now()
                style = iframe.get_attribute('style')
                if style != '':
                    return True

                if current_time >= end_time:
                    return False

            except Exception as e:
                return False

    def close_help(self):
        from framework.utils.common_utils import by_id
        locator = by_id("need_help_active_button")
        self.driver.wait_for_element(UI_TEST_TIMEOUT, locator, True)
        self.driver.find(locator).click()

    def confirm_form_changed_dialog(self):
        from framework.utils.common_utils import by_css
        locator = by_css("#form_changed_warning_dialog a.yes_button")
        confirm_button = self.driver.find(locator)
        if confirm_button.is_displayed():
            confirm_button.click()

    def cancel_form_changed_dialog(self):
        from framework.utils.common_utils import by_css
        locator = by_css("#form_changed_warning_dialog a.cancel_link")
        cancel_button = self.driver.find(locator)
        if cancel_button.is_displayed():
            cancel_button.click()


    def get_warning_dialog_message(self):
        from framework.utils.common_utils import by_css
        locator = by_css("#form_changed_warning_dialog p.warning_message")
        wmsg = self.driver.find(locator)
        if wmsg.is_displayed():
            return wmsg.text
        return ""


    def is_warning_dialog_displayed(self):
        from framework.utils.common_utils import by_css
        try:
            self.driver.find_visible_element(by_css(".ui-dialog-titlebar"))
            return True
        except Exception:
            return False


    def is_success_message_tip_shown(self):
        from framework.utils.common_utils import by_css
        SUCCESS_MESSAGE_TIP = by_css(".success-message-box")
        try:
            self.driver.find_visible_element(SUCCESS_MESSAGE_TIP)
            return True
        except Exception as e:
            raise e
            return False


    def wait_until_modal_dismissed(self):
        from framework.utils.common_utils import by_css
        self.driver.wait_until_element_is_not_present(UI_TEST_TIMEOUT, by_css(".loading"))
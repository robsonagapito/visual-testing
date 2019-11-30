from support.driver_needle import DriverNeedle
from pages.login import Login
from pages.login_fail import LoginFail
from pages.login_ok import LoginOk

class Example01Test(DriverNeedle):

    def test_button_login_with_background_green_and_font_white(self):
        login = Login(self.driver)

        login.open_url()
        
        self.assert_screenshot(login.button_login, 'btnLogin')

    def test_image_on_the_fail_page(self):
        login = Login(self.driver)
        login_fail = LoginFail(self.driver)

        login.open_url()
        login.click_login()
        
        self.assert_screenshot(login_fail.image_fail, 'image-fail')

    def test_image_on_the_ok_page(self):
        login = Login(self.driver)
        login_ok = LoginOk(self.driver)

        login.open_url()
        login.fill_user('robson')
        login.fill_pass('agapito')    
        login.click_login()
        
        self.assert_screenshot(login_ok.image_ok, 'image-ok')

    def test_page_with_hide_element(self):
        login = Login(self.driver)
        
        login.open_url()
        self.hide_element(login.button_login)
        
        self.assert_screenshot(login.container, 'container', ts=1)
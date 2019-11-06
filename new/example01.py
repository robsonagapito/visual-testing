from selenium import webdriver
from needle.cases import NeedleTestCase
from needle.driver import NeedleChrome

class Example01Test(NeedleTestCase):
    engine_class = 'needle.engines.perceptualdiff_engine.Engine'
    #engine_class = 'needle.engines.imagemagick_engine.Engine'
    viewport_width = 1024
    viewport_height = 768

    @classmethod
    def get_web_driver(cls):
        return NeedleChrome()

    def test_check_network_strip_of_sydney_morning_herald_home_page(self):
        self.driver.get('http://www.extra.com.br/')
        self.assertScreenshot('h1.logo', 'extra-logo')
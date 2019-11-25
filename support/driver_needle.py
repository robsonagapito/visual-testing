import os

from selenium import webdriver
from PIL import Image
from io import BytesIO as IOClass

from needle.cases import NeedleTestCase
from needle.driver import NeedleChrome
from needle.driver import NeedleWebDriverMixin

class DriverNeedle(NeedleTestCase):
	# engine_class = 'needle.engines.imagemagick_engine.Engine'
	engine_class = 'needle.engines.perceptualdiff_engine.Engine'
	viewport_width = 1024
	viewport_height = 768

	def get_image_qa(self, name):
		return Image.open(name)

	def save_image_to_fh(self, im):
		fh = IOClass()
		im.save(fh, 'PNG')
		fh.seek(0)
		return fh

	@classmethod
	def get_web_driver(cls):
		return NeedleChrome()

	def hide_element(cls, element_css):
		element = cls.driver.find_element_by_css_selector(element_css)
		# cls.driver.execute_script("arguments[0].style.display = 'none';", element)
		cls.driver.execute_script("arguments[0].remove()", element)

	def assert_screenshot(self, element, name, ts=0):
		if (ts == 0):
			self.assertScreenshot(element, name)
		else:
			path = os.getcwd()
			name = path + '/screenshots/baseline/'+ name
			if (os.path.isfile(name + '.png')): 
				image = self.get_image_qa(name + '.png')
				self.assertScreenshot(self.driver.find_element_by_css_selector(element), self.save_image_to_fh(image), threshold=ts)
			else:
				self.assertScreenshot(element, name)
import os

class Login:

	def __init__(self, driverQA):
		self.driver = driverQA
		self.button_login = "#btnLogin"
		self.input_login = "#login"
		self.input_password = "#password"
		self.container = ".container"

	def open_url(self):
		cwd = os.getcwd()
		self.driver.get('file://'+ cwd + '/html/login.html')

	def fill_user(self, value):
		element = self.driver.find_element_by_css_selector(self.input_login)
		element.send_keys(value)

	def fill_pass(self, value):
		element = self.driver.find_element_by_css_selector(self.input_password)
		element.send_keys(value)

	def click_login(self):
		element = self.driver.find_element_by_css_selector(self.button_login)
		element.click()
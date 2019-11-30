Versions
========

* *Python Version* - Python 3.7.0
* *Pip Version* - pip 19.3.1 

Install
=======
Pip
---

*Selenium*

> pip install selenium

*Needle*

> pip install needle

*Nose*

> pip install nose

PerceptualDiff
--------------

* Download the latest version of PerceptualDiff. Include the PerceptualDiff folder in your PATH environment variable.

> https://sourceforge.net/projects/pdiff/files/

Selenium Drivers
----------------

If your driver is not compatible with your browser, the testing automation will not be to work.

* Install chromedriver compatible with your Chrome Browser
( https://chromedriver.chromium.org/ )

*Obs:For windows, you need to have FreeImage.dll to working correctly*

Running
=======

* Create baseline:

> nosetests testing/example01.py --with-save-baseline

* Run with cleanup files on success:

> nosetests testing/example01.py --with-needle-cleanup-on-success

* Simple Run:

> nosetests testing/example01.py

Extras
======

* Github - Python Needle

> https://github.com/python-needle/needle
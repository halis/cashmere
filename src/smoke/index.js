
require('chromedriver');

const webdriver = require('selenium-webdriver');
global.smoke = require('./smokeTest');
global.snapshot = require('./snapshot');

global.By = webdriver.By;
global.until = webdriver.until;

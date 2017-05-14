
require('chromedriver');
const chalk = require('chalk');
const webdriver = require('selenium-webdriver');
global.cheerio = require('cheerio');

global.By = webdriver.By;
global.until = webdriver.until;

global.driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions()
  .build();

const catchHandler = (err) => {
  console.info(chalk.red('There was an error. Shutting down selenium'));
  driver.quit();

  console.info(chalk.gray(err.stack));
  console.info();
};

const done = () => driver.quit();

module.exports = {
  catchHandler,
  done,
};

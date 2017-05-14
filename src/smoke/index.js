
require('chromedriver');

const path = require('path');
const chalk = require('chalk');
const webdriver = require('selenium-webdriver');
const { snapshotsDir } = require('../snapshot/');
global.cheerio = require('cheerio');

global.By = webdriver.By;
global.until = webdriver.until;

const startBrowser = () => new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions()
  .build();

const catchHandler = browser => err => {
  console.info(chalk.red('There was an error. Shutting down selenium'));
  browser.quit();

  console.info(chalk.gray(err.stack));
  console.info();
};

const done = browser => browser.quit();

const getPath = name => path.join(snapshotsDir, name);
module.exports = {
  catchHandler,
  done,
  getPath,
  snapshotsDir,
  startBrowser,
};

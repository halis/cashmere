
const webdriver = require('selenium-webdriver');

const startBrowser = () => new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions()
  .build();

module.exports = startBrowser;

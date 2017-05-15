
const startBrowser = require('./browser');

const smoke = (text, test) => {
  const browser = startBrowser();

  try {
    test(browser);
  } catch (err) {
    console.trace(err);
    browser.quit();
  }
};

module.exports = smoke;

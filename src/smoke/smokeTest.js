/* eslint-disable no-param-reassign */

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
const skip = () => null;

const handler = {
  get: (target, key) => {
    if (key === 'skip') return skip;
    return smoke;
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};

module.exports = new Proxy(smoke, handler);

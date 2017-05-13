/* eslint-disable no-param-reassign */

const chalk = require('chalk');
const BASE_MARGIN = require('./baseMargin');

const skip = () => null;
const describe = (text, test) => {
  const leftMargin = BASE_MARGIN.repeat(BASE_MARGIN.length * 0);
  try {
    if (global.tests.total > 0) console.info();
    console.info(chalk.cyan(`${leftMargin}${text}`));
    test();
  } catch (err) {
    global.exitCode = 1;
  }
};

const handler = {
  get: (target, key) => {
    if (key === 'skip') return skip;
    return describe;
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};

module.exports = new Proxy(describe, handler);


/* eslint-disable no-param-reassign */

const chalk = require('chalk');
const BASE_MARGIN = require('./baseMargin');
const usage = require('./usage');

const skip = () => null;
const context = (text, test) => {
  usage('describe', text, test);

  const leftMargin = BASE_MARGIN.repeat(BASE_MARGIN.length * 1);
  try {
    console.info(chalk.yellow(` ${leftMargin}${text}`));
    test();
  } catch (err) {
    global.exitCode = 1;
  }
};

const handler = {
  get: (target, key) => {
    if (key === 'skip') return skip;
    return context;
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};

module.exports = new Proxy(context, handler);

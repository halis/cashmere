/* eslint-disable no-param-reassign */

const chalk = require('chalk');
const usage = require('./usage');
const fail = require('./fail');

const skip = () => null;

const push = queue => (text, test) => {
  queue.push({ text, test });
};

const describe = push(global.queue.describe.run);
const only = push(global.queue.describe.only);

const run = (text, test) => {
  usage('describe', text, test);
  try {
    if (global.tests.total > 0) console.info();
    console.info(chalk.cyan(text));
    test();
  } catch (err) {
    fail(err, err.message);
    global.exitCode = 1;
  }
};

const handler = {
  get: (target, key) => {
    if (key === 'skip') return skip;
    if (key === 'run') return run;
    if (key === 'only') return only;
    return describe;
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};

module.exports = new Proxy(describe, handler);

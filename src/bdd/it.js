/* eslint-disable no-param-reassign */
/* eslint-disable no-constant-condition */

const chalk = require('chalk');
const pass = require('./pass');
const fail = require('./fail');
const usage = require('./usage');
const request = require('request');

let finishedCtr = 0;
const ids = [];
const asyncFn = (text, test) => {
  usage('describe', text, test);

  try {
    let finished = false;
    let error = null;
    global.tests.async += 1;

    const done = (_error) => {
      finished = true;
      error = _error;
    };

    const get = request.get;
    request.get = (...args) => {
      const newArgs = args.map(arg => {
        if (arg instanceof Function) {
          const fn = arg;
          return (...fnArgs) => {
            try {
              fn(...fnArgs);
            } catch (err) {
              done(err);
            }
          };
        }
        return arg;
      });

      get(...newArgs);
    };

    const id = setInterval(() => {
      if (finished) {
        clearInterval(id);
        finishedCtr += 1;

        if (error) {
          fail(error, text);
        } else {
          pass(`${text} ${chalk.italic('(async test)')}`);
        }

        if (global.tests.async === finishedCtr) {
          ids.forEach(clearInterval);
        }
      }
    }, 50);

    ids.push(id);

    test(done, request);
  } catch (err) {
    fail(err, text);
  }
};

const skip = () => null;
const it = (text, test) => {
  usage('describe', text, test);

  try {
    global.tests.total += 1;
    test();
    pass(text);
  } catch (err) {
    fail(err, text);
  }
};

const handler = {
  get: (target, key) => {
    if (key === 'async') return asyncFn;
    if (key === 'skip') return skip;
    return it;
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};

module.exports = new Proxy(it, handler);

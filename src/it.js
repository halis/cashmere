
const pass = require('./pass');
const fail = require('./fail');

/* eslint-disable no-param-reassign */

const asyncFn = (text, test) => {
  try {
    global.tests.total += 1;
    test();
    pass(text);
  } catch (err) {
    fail(err, text);
  }
};

const skip = () => null;

const it = (text, test) => {
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
    if (key === 'async') {
      return asyncFn;
    }
    if (key === 'skip') {
      return skip;
    }
    return it;
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};

module.exports = new Proxy(it, handler);

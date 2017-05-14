/* eslint-disable no-param-reassign */
/* eslint-disable no-constant-condition */

const pass = require('./pass');
const fail = require('./fail');
const usage = require('./usage');

let finishedCtr = 0;
const ids = [];
const asyncFn = (text, test) => {
  usage('describe', text, test);

  let finished = false;
  let error = null;
  global.tests.async += 1;

  const done = (_error) => {
    finished = true;
    error = _error;
  };
  const id = setInterval(() => {
    if (finished) {
      clearInterval(id);
      finishedCtr += 1;

      if (error) {
        fail(error, text);
      } else {
        pass(text);
      }

      if (global.tests.async === finishedCtr) {
        ids.forEach(clearInterval);
      }
    }
  }, 50);

  ids.push(id);

  test(done);
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

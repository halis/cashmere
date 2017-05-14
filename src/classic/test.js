/* eslint-disable no-param-reassign */

const test = (text, tests) => {
  console.info(JSON.stringify(store));
  console.info(text);
  tests.forEach(({ desc, actual, expected }) => {
    try {
      console.info(desc);
      expect(actual).to.deep.equal(expected);
      console.info('Success');
    } catch (err) {
      console.info('Fail');
      console.info(err);
    }
  });
};

const skip = () => null;
const handler = {
  get: (target, key) => {
    if (key === 'skip') return skip;
    return test;
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};
module.exports = new Proxy(test, handler);


const diff = require('jest-diff');
const { AssertionError } = require('chai');
const chalk = require('chalk');
const BASE_MARGIN = require('./baseMargin');

const leftMargin = BASE_MARGIN.repeat(BASE_MARGIN.length * 2);

const HOME = process.env.HOME || '$$$SomethingThatWontBeFound###';
const PWD = process.env.PWD || '$$$SomethingThatWontBeFound###';
const cleanStack = R.pipe(
  R.replace('AssertionError: ', ''),
  R.trim,
  R.split(/\n+/g),
  R.map(R.trim),
  R.map(R.replace(`${PWD}/`, '')),
  R.map(R.replace(`${HOME}/`, '~/')),
  R.slice(1, R.Infinity),
  R.filter(x => !/node_modules\//.test(x)),
  R.filter(x => !/\(module.js:/.test(x))
);

module.exports = (err, text) => {
  global.tests.fail += 1;
  global.exitCode = 1;

  const pretty = string => JSON.stringify(string, null, 2);
  const prepareMargin = BASE_MARGIN.repeat((leftMargin.length * 2) - 1);
  const prepare = R.pipe(
    pretty,
    R.split(/\n+/g),
    R.map(x => `${prepareMargin}${x}`),
    R.join('\n'),
    R.trim
  );
  if (err instanceof AssertionError) {
    console.info(chalk.red.bold(`${leftMargin}FAIL: ${text}`));
    console.info(chalk.green(`${leftMargin} Expected: ${prepare(err.expected)}`));
    console.info(chalk.red(`${leftMargin} Received: ${prepare(err.actual)}`));

    const isObject = R.is(Object);
    const isString = R.is(String);
    const diffNew = (object1, object2) => diff(object1, object2)
      .split(/\n+/g)
      .map(x => `${prepareMargin}${x}`)
      .join('\n');

    if (typeof err.expected === typeof err.actual) {
      if (isObject(err.expected) || isString(err.expected)) {
        console.info(chalk.gray(`${prepareMargin}Diff:`));
        console.info(diffNew(err.expected, err.actual));
      }
    }

    console.info(chalk.gray(`${leftMargin} Assertion error: ${err.message}`));
    const stack = cleanStack(err.stack)
      .map(x => `${leftMargin}  ${x}`);
    console.info(chalk.gray(stack.join('\n')));
  } else {
    console.info(chalk.red.bold(`${leftMargin}FAIL: ${text}`));
    console.info(chalk.gray(`${leftMargin} Uncaught exception: ${err.message}`));
    const stack = cleanStack(err.stack)
      .map(x => `${leftMargin}  ${x}`);
    console.info(chalk.gray(stack.join('\n')));
  }
};


const chalk = require('chalk');
const BASE_MARGIN = require('./baseMargin');

const leftMargin = BASE_MARGIN.repeat(BASE_MARGIN.length * 2);

module.exports = (text) => {
  global.tests.pass += 1;
  const label = chalk.green.bold('PASS');
  const value = chalk.gray(text);
  console.info(`${leftMargin}${label} ${value}`);
};

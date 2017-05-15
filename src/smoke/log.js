
const chalk = require('chalk');

const PASS = chalk.green.bold('PASS:');
const FAIL = chalk.red.bold('FAIL:');
const INFO = chalk.yellow.bold('INFO:');

const created = (url, selector, name) => (chalk.bold.gray([
  `${INFO} Snapshot ${chalk.cyan(name)} started `,
  `for selector ${chalk.cyan(selector)} at ${chalk.yellow(url)}`
].join('')));

const result = (type, url, selector, name) => {
  const formattedName = chalk.blue.bold(name);
  return `
${chalk.bold('SMOKE TEST')}
 ${chalk.cyan('url:')} ${chalk.cyan(url)}
  ${chalk.yellow('selector:')} ${chalk.yellow(selector)}
   ${type} ${chalk.gray.bold('Snapshot')} ${formattedName} ${chalk.gray.bold('looks good')}`;
};

const pass = (url, selector, name) => result(PASS, url, selector, name);
const fail = (url, selector, name) => result(FAIL, url, selector, name);

module.exports = { created, pass, fail };

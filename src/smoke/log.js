
const chalk = require('chalk');

const PASS = chalk.green.bold('PASS:');
const FAIL = chalk.red.bold('FAIL:');
const INFO = chalk.yellow.bold('INFO:');

const created = (url, snapshotInfo) => (chalk.bold.gray([
  `${INFO} Snapshot ${chalk.cyan(snapshotInfo.name)} started `,
  `for selector ${chalk.cyan(snapshotInfo.selector)} at ${chalk.yellow(url)}`
].join('')));

const result = (type, url, snapshotInfo) => (chalk.bold.gray([
  `${type} Snapshot ${chalk.cyan(snapshotInfo.name)} `,
  `for selector ${chalk.cyan(snapshotInfo.selector)} at ${chalk.yellow(url)}`
].join('')));

const pass = (url, snapshotInfo) => result(PASS, url, snapshotInfo);
const fail = (url, snapshotInfo) => result(FAIL, url, snapshotInfo);

module.exports = {
  created,
  pass,
  fail,
};

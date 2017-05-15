
const chalk = require('chalk');

const catchHandler = err => {
  console.info(chalk.red('There was an error. Shutting down selenium'));
  console.info(chalk.gray(err.stack));
  console.info();
};

module.exports = catchHandler;

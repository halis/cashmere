// @flow

const chalk = require('chalk');
const { execSync } = require('child_process');

const ignore = ' ! -path "*.mock.js" | grep -v node_modules | grep -v coverage | grep -v cover | grep -v "flow-typed" | grep -v "build/"';

const getFiles = (pattern) => {
  const command = `find . -name ${pattern} ${ignore}`;
  const options = { encoding: 'utf8' };

  const onNewlines = /\n+/g;
  const notEmpty = x => x;

  return execSync(command, options)
    .split(onNewlines)
    .filter(notEmpty);
};

const JS_PATTERN = '"*.js" ! -path "*.test.js"';
const jsFiles = getFiles(JS_PATTERN);

const TEST_PATTERN = '"*.test.js"';
const testFiles = getFiles(TEST_PATTERN);

const noTestFile = x => !testFiles.includes(`${x.replace('.js', '.test.js')}`);
const untestedFiles = jsFiles.filter(noTestFile);

if (untestedFiles.length > 0) {
  console.info(untestedFiles.join('\n'));
  const count = chalk.bold(untestedFiles.length);
  const text = chalk.green.bold('untested javascript files');
  console.info(`\n${count} ${text}`);
} else {
  const text = chalk.green.bold('All javscript files are tested!');
  console.info(text);
}

process.exit(untestedFiles.length);

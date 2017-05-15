/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const runner = (fileGlob) => {
  const find = require('child_process').spawn(
    'find', [process.cwd(), '-name', fileGlob]
  );

  find.stdout.on('data', (data) => {
    const files = data
      .toString('utf8')
      .split(/\n+/g)
      .filter(x => /\/node_modules\//.test(x) === false)
      .filter(x => x);

    const runTests = file => require(file);
    files.forEach(runTests);
  });

  find.stderr.on('data', (data) => {
    console.info('Error finding test files');
    console.info(data.toString('utf8'));
  });
};

module.exports = runner;

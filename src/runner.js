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

    const runQueue = queue => queue.forEach(x => {
      describe.run(x.text, x.test);
    });

    if (global.queue.describe.only.length) {
      runQueue(global.queue.describe.only);
    } else {
      runQueue(global.queue.describe.run);
    }
  });

  find.stderr.on('data', (data) => {
    console.info('Error finding test files');
    console.info(data.toString('utf8'));
  });
};

module.exports = runner;

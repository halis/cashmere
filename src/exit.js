
module.exports = () => {
  if (!global.tests.total) console.info('No tests found');
  else console.info('');

  process.exit(global.exitCode);
};

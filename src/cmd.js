
const program = require('commander');
const packageJson = require('../package.json');

module.exports = () => {
  program
    .version(packageJson.version)
    .parse(process.argv);
};

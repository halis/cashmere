
const path = require('path');
const { snapshotsDir } = require('../snapshot/');
const startBrowser = require('./browser');
const catchHandler = require('./catch');

const getPath = name => path.join(snapshotsDir, name);

module.exports = {
  catchHandler,
  getPath,
  snapshotsDir,
  startBrowser,
};

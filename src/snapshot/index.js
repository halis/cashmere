
const create = require('./create');
const read = require('./read');
const update = require('./update');
const remove = require('./delete');
const compare = require('./compare');
const dir = require('./dir');

module.exports = {
  create,
  read,
  update,
  delete: remove,
  compare,
  snapshotsDir: dir,
};

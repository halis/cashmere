
const fs = require('fs');
const read = require('./read');

module.exports = (oldPath, newPath) => {
  if (oldPath == null) throw new Error('oldPath to compare a snapshot is required');
  if (newPath == null) throw new Error('newPath to compare a snapshot is required');
  if (!fs.existsSync(oldPath)) throw new Error('oldPath did not exist');
  if (!fs.existsSync(newPath)) throw new Error('newPath did not exist');

  try {
    const oldSnapshot = read(oldPath);
    const newSnapshot = read(newPath);

    if (oldSnapshot === newSnapshot) {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};


const fs = require('fs');

module.exports = (path) => {
  if (path == null) throw new Error('path to read a snapshot is required');

  try {
    if (!fs.existsSync(path)) return null;
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    return null;
  }
};

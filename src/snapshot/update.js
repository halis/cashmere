
const fs = require('fs');
const read = require('./read');

module.exports = (oldPath, newPath) => {
  if (oldPath == null) throw new Error('oldPath to update a snapshot is required');
  if (newPath == null) throw new Error('newPath to update a snapshot is required');

  try {
    if (!fs.existsSync(oldPath)) return false;
    if (!fs.existsSync(newPath)) return false;

    const content = read(newPath);
    fs.writeFileSync(oldPath, content, 'utf8');

    return true;
  } catch (err) {
    return false;
  }
};

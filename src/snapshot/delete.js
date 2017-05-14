
const fs = require('fs');

module.exports = (oldPath, newPath) => {
  if (oldPath == null && newPath == null) {
    throw new Error('Either oldPath or newPath is required to delete a snapshot');
  }

  try {
    if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    if (fs.existsSync(newPath)) fs.unlinkSync(newPath);
    return true;
  } catch (err) {
    return false;
  }
};

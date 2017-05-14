
const fs = require('fs');
const rewrite = require('./rewrite');
const snapshotsDir = require('./dir.js');

module.exports = (snapshotPath, content, fns) => {
  if (snapshotPath == null) throw new Error('snapshotPath to create a snapshot is required');
  if (content == null) throw new Error('content to create a snapshot is required');

  const parts = snapshotPath.split('.');
  if (parts.pop() !== 'snapshot') {
    throw new Error('snapshotPath for a snapshot must end in .snapshot');
  } else {
    const part = parts.pop();
    if (part !== 'new' && part !== 'old') {
      throw new Error('snapshotPath for a snapshot must end in ".new.snapshot" or ".old.snapshot"');
    }
  }

  if (!fs.existsSync(snapshotsDir)) {
    fs.mkdirSync(snapshotsDir);
  }

  try {
    const newContent = rewrite(fns, content);
    fs.writeFileSync(snapshotPath, newContent, 'utf8');
    return true;
  } catch (err) {
    throw err;
  }
};

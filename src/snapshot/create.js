
const fs = require('fs');
const rewrite = require('./rewrite');

module.exports = (path, content, fns) => {
  if (path == null) throw new Error('path to create a snapshot is required');
  if (content == null) throw new Error('content to create a snapshot is required');

  const parts = path.split('.');
  if (parts.pop() !== 'snapshot') {
    throw new Error('path for a snapshot must end in .snapshot');
  } else {
    const part = parts.pop();
    if (part !== 'new' && part !== 'old') {
      throw new Error('path for a snapshot must end in ".new.snapshot" or ".old.snapshot"');
    }
  }

  try {
    if (fs.existsSync(path)) return true;

    const newContent = rewrite(fns, content);
    fs.writeFileSync(path, newContent, 'utf8');
    return true;
  } catch (err) {
    return false;
  }
};

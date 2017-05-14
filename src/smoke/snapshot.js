
const fs = require('fs');
const log = require('./log');
const snapshot = require('../snapshot/');
const getHtml = require('./html');
const { catchHandler, done, getPath, startBrowser } = require('./index');

const checkSnapshot = (newPath, oldPath, html, url, snapshotInfo) => {
  snapshot.create(newPath, html);

  const oldContent = snapshot.read(oldPath);
  const newContent = snapshot.read(newPath);

  if (oldContent === newContent) {
    console.info(log.pass(url, snapshotInfo));
  } else {
    console.info(log.fail(url, snapshotInfo));
  }
};

const startSnapshot = (oldPath, html, url, snapshotInfo) => {
  snapshot.create(oldPath, html);
  console.info(log.created(url, snapshotInfo));
};

module.exports = (url, snapshots) => {
  const browser = startBrowser();

  getHtml(browser, url)
    .then(($) => {
      snapshots.forEach((snapshotInfo) => {
        const oldPath = getPath(`${snapshotInfo.name}.old.snapshot`);
        const newPath = getPath(`${snapshotInfo.name}.new.snapshot`);
        const html = $.html(snapshotInfo.selector);

        if (fs.existsSync(oldPath)) {
          checkSnapshot(newPath, oldPath, html, url, snapshotInfo);
        } else {
          startSnapshot(oldPath, html, url, snapshotInfo);
        }
      });
    })
    .then(done(browser))
    .catch(catchHandler(browser));
};


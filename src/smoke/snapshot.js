
const fs = require('fs');
const log = require('./log');
const snapshot = require('../snapshot/');
const getHtml = require('./html');
const { catchHandler, getPath } = require('./util');

const checkSnapshot = (newPath, oldPath, html, url, selector, name) => {
  snapshot.create(newPath, html);

  const oldContent = snapshot.read(oldPath);
  const newContent = snapshot.read(newPath);

  if (oldContent === newContent) {
    console.info(log.pass(url, selector, name));
  } else {
    console.info(log.fail(url, selector, name));
  }
};

const startSnapshot = (oldPath, html, url, selector, name) => {
  snapshot.create(oldPath, html);
  console.info(log.created(url, selector, name));
};

module.exports = ({ browser, url, selector, name }) => {
  getHtml(browser, url)
    .then(($) => {
      const oldPath = getPath(`${name}.old.snapshot`);
      const newPath = getPath(`${name}.new.snapshot`);
      const html = $.html(selector);

      if (fs.existsSync(oldPath)) {
        checkSnapshot(newPath, oldPath, html, url, selector, name);
      } else {
        startSnapshot(oldPath, html, url, selector, name);
      }
    })
    .catch(catchHandler);

  return browser;
};


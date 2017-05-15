
const cheerio = require('cheerio');

module.exports = (browser) => new Promise((resolve, reject) => {
  try {
    browser.wait(until.elementLocated(By.tagName('html')), 10000);

    browser.findElement(By.tagName('html'))
      .getAttribute('outerHTML')
      .then((html) => {
        const $ = cheerio.load(html);
        resolve($);
      });
  } catch (err) {
    reject(err);
  }
});

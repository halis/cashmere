
module.exports = (browser, url) => new Promise((resolve, reject) => {
  try {
    browser.get(url);
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

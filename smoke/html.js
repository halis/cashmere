
module.exports = url => new Promise((resolve, reject) => {
  try {
    driver.get(url);
    driver.wait(until.elementLocated(By.tagName('html')), 10000);

    driver.findElement(By.tagName('html'))
      .getAttribute('outerHTML')
      .then((html) => {
        const $ = cheerio.load(html);
        resolve($);
      });
  } catch (err) {
    reject(err);
  }
});

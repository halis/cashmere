
const fs = require('fs');
const path = require('path');

const logIf = R.when(R.complement(R.isNil), console.info);

smoke.skip('Google', browser => {
  const url = 'https://www.google.com/ncr';
  browser.get(url);

  browser.findElement(By.name('q')).sendKeys('webdriver');
  browser.findElement(By.name('btnG')).click();
  browser.wait(until.titleIs('webdriver - Google Search'), 5000);
  browser.takeScreenshot().then((image, err) => {
    if (err) throw err;
    fs.writeFile(path.join(process.cwd(), './screenshots/google.new.png'), image, 'base64', logIf);
  });

  snapshot({
    browser,
    url,
    selector: '#lst-ib',
    name: 'search-results',
  });

  browser.quit();
});

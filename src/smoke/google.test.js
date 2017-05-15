
smoke('Google', browser => {
  const url = 'https://www.google.com/ncr';
  browser.get(url);

  browser.findElement(By.name('q')).sendKeys('webdriver');
  browser.findElement(By.name('btnG')).click();
  browser.wait(until.titleIs('webdriver - Google Search'), 5000);

  snapshot({
    browser,
    url,
    selector: '#lst-ib',
    name: 'search-results',
  });

  browser.quit();
});

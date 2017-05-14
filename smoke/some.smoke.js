
const { catchHandler, done } = require('./index');
const getHtml = require('./html');

getHtml('https://www.google.com')
  .then(($) => {
    // console.log($.html('body'));
  })
  .then(done).catch(catchHandler);

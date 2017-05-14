
const createSnapshots = require('./snapshot');

createSnapshots('https://www.google.com',
  [
    {
      selector: '#lst-ib',
      name: 'search',
    }
  ]
);

createSnapshots('https://npmjs.com',
  [
    {
      selector: '#site-search',
      name: 'search-npm',
    }
  ]
);

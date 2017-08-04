# cashmere
A javascript testing library.

**Warning: Install at your own peril! This project is brand new and nowhere near ready!**

**Important: All test files must end in `.test.js`, the runner executes a find command with that extension**

*Note: As specified in engines, Node >=6.4.0 is required as ES6 Proxies are currently being used*

*Note: If you run the tests for cashmere, some of them fail intentionally to show FAIL output*

To install:

`yarn add cashmere`<br />
or<br />
`npm install cashmere`<br />

Here is an example of a test `person.test.js`:
```javascript
describe('person', () => {
  context('#firstName()', () => {
    it('Should get first name', () => {
      expect({ hello: 'world' }).to.deep.equal({ hello: 'world' });
    });

    it('Should get middle name', () => {
      expect(1).to.equal(1);
    });
  });
});
```

Note that you don't have to import anything, including `expect`.

Here is an example of an asynchronous test `websites.test.js`:
```javascript
describe('websites', () => {
  it.async('Facebook', (done, request) => {
    request.get('https://www.facebook.com', (err, res) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it.async('Halis Technology', (done, request) => {
    request.get('https://www.halistechnology.com', (err, res) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
```

For async tests it's `it.async` instead of `it`.
Note that you don't have to import anything, including `request`.

Current Features
* Unit tests
* Mocha style describe/context/it
* Async tests (brand new so use at your own peril)
* Automatically compiles tests written in ES6
* No special unicode characters in test output that don't display correctly in CI servers
* No hiding logging statements
* Clean stack traces
* Diff output

Future Goals
* Performance (may need parallel runs at some point)
* Setup a global Redux-like store and have access to it from every test
* Experiment with different testing styles
* Probably need to store the output of asynchronous tests until done is called and then flush it all to the console at once

Note: In the tests you DO NOT need to import the following:
* describe
* context
* it
* expect
* request
* By
* until

These are provided for you by default.

If you are using ESLint then put the following in your `.eslintrc`:
```json
  "globals": {
    "expect": true
  },
  "env": {
    "mocha": true
  }
```

*Note: This all works on Mac right now, Windows support could be added at some point*

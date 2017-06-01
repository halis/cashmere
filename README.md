# cashmere
A javascript testing library.

**Warning: Install at your own peril! This project is brand new and nowhere near ready!**

*Note: As specified in engines, Node >=6.4.0 is required as ES6 Proxies are currently being used*

**Important: All test files must end in `.test.js`, the runner executes a find command with that extension**

To install:

`yarn add cashmere`<br />
or<br />
`npm install cashmere`<br />

If you are interested in running browser based smoke tests via selenium then also run:<br />
`npm run smoke-setup`<br />

**Warning: For this command to work you must have docker installed, as it pulls a docker image with selenium and starts it**

To install docker on Mac:
https://store.docker.com/editions/community/docker-ce-desktop-mac

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

Here is an example of an asynchronous test `websites.test.js`:
```javascript
describe('websites', () => {
  it.async('google', (done) => {
    request.get('https://www.google.com')
      .then(res => {
        expect(res).to.include({
          status: 200,
          statusText: 'OK',
        });
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it.async('facebook', (done) => {
    request.get('https://www.facebook.com')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.statusText).to.equal('OK');
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
```

Here is an example of a browser smoke test `google.test.js`:
```javascript
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
```

**Note: If the smoke tests fail to run then it's possible selenium isn't setup**

To setup selenium run:<br />
`npm run smoke-setup`<br />
This will download a docker image with selenium, create a container and start it

To start selenium manually:<br />
`npm run smoke-start`

To stop selenium manually:<br />
`npm run smoke-stop`

And to uninstall selenium:<br />
`npm run smoke-uninstall`

Current Features
* Unit tests
* Mocha style describe/context/it
* Async tests (brand new so use at your own peril)
* Automatically compiles tests written in ES6
* No special unicode characters in test output that don't display correctly in CI servers
* No hiding logging statements
* Clean stack traces
* Diff output
* Smoke tests (requires docker to start selenium)
* Html-based snapshot tests for smoke tests

Future Goals
* Snapshot tests not tied to React (currently tied to selenium, but will be genericized)
* Performance (may need parallel runs at some point)
* Setup a global Redux-like store and have access to it from every test
* Experiment with different testing styles
* Also interested in taking screenshots during integration tests and doing some perceptual diffs (or even diff the html and then render the output to easily see differences)
* Probably need to store the output of asynchronous tests until done is called and then flush it all to the console at once

Here is an example of the test runner output:
```bash
UNIT TEST
 animal
  #run()
   PASS: Test #1
   PASS: Test #2
   PASS: Test #3
   PASS: Test #4
   PASS: Test #5
   PASS: Test #6
   FAIL: Should be fast
   Expected: 2
   Received: 1
   Assertion error: expected 1 to equal 2
    at src/bdd/person.test.js:63:20
    at it (src/bdd/it.js:50:5)
    at src/bdd/person.test.js:62:5
    at context (src/bdd/context.js:15:5)
    at src/bdd/person.test.js:37:3
    at describe (src/bdd/describe.js:16:5)
    at Object.<anonymous> (src/bdd/person.test.js:36:1)
   FAIL: Should be quiet
   Expected: {
     "abc": "123"
   }
   Received: {
     "hello": "world"
   }
   Diff:
   - Expected
   + Received
     Object {
   -   "abc": "123",
   +   "hello": "world",
     }
   Assertion error: expected { hello: 'world' } to deeply equal { abc: '123' }
    at src/bdd/person.test.js:67:42
    at it (src/bdd/it.js:50:5)
    at src/bdd/person.test.js:66:5
    at context (src/bdd/context.js:15:5)
    at src/bdd/person.test.js:37:3
    at describe (src/bdd/describe.js:16:5)
    at Object.<anonymous> (src/bdd/person.test.js:36:1)

UNIT TEST
 websites
   PASS: google
   PASS: facebook

SMOKE TEST
 url: https://www.google.com/ncr
  selector: #lst-ib
   PASS: Snapshot search-results looks good
```

Note: In the tests you DO NOT need to import the following:
* describe
* context
* it
* expect
* request
* smoke
* snapshot
* By
* until

These are provided for you by default.

If you are using ESLint then put the following in your `.eslintrc`:
```json
  "globals": {
    "expect": true,
    "request": true
  },
  "env": {
    "mocha": true
  }
```

*Note: This all works on Mac right now, Windows support could be added at some point*

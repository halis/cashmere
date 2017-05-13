# cashmere
A javascript testing library.

**Warning: Install at your own peril! This project is brand new and nowhere near ready!**

**Note: As specified in engines, Node >=6.4.0 is required as ES6 Proxies are currently being used**

**Important: All test files must end in `.test.js`, the runner executes a find command with that extension**

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
* Integration tests (probably selenium)
* Snapshot tests not tied to React
* Html-based snapshot tests for integration tests
* Performance (may need parallel runs at some point)
* Setup a global Redux-like store and have access to it from every test
* Experiment with different testing styles

Here is an example of the test runner output:
```bash
person
 #firstName()
  PASS: Should get first name
  PASS: Should get middle name
  PASS: Should get last name
  PASS: Should get age
  PASS: Should get kids
 #lastName()
  PASS: Should get middle name
  PASS: Should get last name

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
    at src/describe.test.js:63:20
    at it (src/it.js:46:5)
    at src/describe.test.js:62:5
    at context (src/context.js:12:5)
    at src/describe.test.js:37:3
    at describe (src/describe.js:12:5)
    at Object.<anonymous> (src/describe.test.js:36:1)
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
    at src/describe.test.js:67:42
    at it (src/it.js:46:5)
    at src/describe.test.js:66:5
    at context (src/context.js:12:5)
    at src/describe.test.js:37:3
    at describe (src/describe.js:12:5)
    at Object.<anonymous> (src/describe.test.js:36:1)

websites
  PASS: google
  PASS: facebook
```

Note: In the tests you DO NOT need to import the following:
* describe
* context
* it
* expect
* request

These are provided for you by default.<br />
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

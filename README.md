# cashmere
A javascript testing library.

**Warning: Install at your own peril! This project is brand new and nowhere near ready!**

**Note: As specified in engines, Node >=6.4.0 is required as ES6 Proxies are currently being used**

Goals
* Unit tests
* Integration tests (probably selenium)
* Mocha style describe/context/it
* Experiment with different testing styles
* Async tests are in progress but not implemented yet
* Automatically compiles tests written in ES6
* Snapshot tests not tied to React
* Html-based snapshot tests for the integration tests
* Performance, it runs the tests quickly
* Setup a global Redux-like store and have access to it from every test
* Output that makes it easy to debug whether locally or from a log on a CI server
* No special unicode characters in test output that don't display correctly in CI servers
* No hiding logging statements
* Clean stack traces
* Diff output

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
    at module.exports (src/it.js:8:5)
    at src/describe.test.js:62:5
    at module.exports (src/context.js:10:5)
    at src/describe.test.js:37:3
    at describe (src/describe.js:13:5)
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
    at module.exports (src/it.js:8:5)
    at src/describe.test.js:66:5
    at module.exports (src/context.js:10:5)
    at src/describe.test.js:37:3
    at describe (src/describe.js:13:5)
    at Object.<anonymous> (src/describe.test.js:36:1)
```

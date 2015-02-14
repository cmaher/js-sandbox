js-sandbox
---

A no-frills js sandbox for TDDing code.

`gulp --tdd` will run tests (in karma) and watch for changes.

Comes with:

* jspm with 6to5 for writing ES6 code
* karma for running tests
  * mocha for writing tests
  * chai for assertions
    * plus chai plugins
  * sinon for stubbing with
    * `this.sinon` for a sandbox
    * `this.server` for a fake server

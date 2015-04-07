js-sandbox
---

A no-frills js sandbox for TDDing code.

```shell
npm install
./node_modules/.bin/jspm install
```

`gulp --tdd` will run tests (in karma) and watch for changes.
Restart the watch when adding new files.

Comes with:

* jspm with babel for writing ES6 code
* karma for running tests
  * mocha for writing tests
  * chai for assertions
    * plus chai plugins
  * sinon for stubbing with
    * `this.sinon` for a sandbox
    * `this.server` for a fake server

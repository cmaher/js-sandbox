'use strict';

beforeEach(function () {
  this.sinon = sinon.sandbox.create();
  this.server = sinon.fakeServer.create();
});

afterEach(function () {
  this.sinon.restore();
  this.server.restore();
});

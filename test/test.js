'use strict';

var assert = require('assert');
var build = require('../metalsmith.js');

it('It should not throw error when generating site', function (cb) {
  build(function (err) {
    assert.equal(err, null);
    cb();
  });
});

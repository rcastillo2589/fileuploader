var chai = require('chai');
var assert = chai.assert,
    foo = 'bar';

describe('foo', function() {
  describe('', function() {
    it('foo should be type string', function() {
      assert.typeOf(foo, 'string');
    });
  });
});
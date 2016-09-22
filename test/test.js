var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = chai.assert,
    foo = 'bar';
var should = chai.should();
chai.Use(chaiHttp);

describe('foo', function() {
  describe('', function() {
    it('foo should be type string', function() {
      assert.typeOf(foo, 'string');
    });
  });
});

describe('file uploader api', function() {
  var server;
  beforeEach(function () {
    delete require.cache[require.resolve('../index')];
    server = require('../index');
  });
  afterEach(function (done) {
    server.close(done);
  });
  it('responds to /', function testSlash(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('404 everything else', function testPath(done) {
    chai.request(server)
      .get('/foo/bar')
      .end(function(err, res) {
        res.should.have.status(404);
        done();
      })
  })
});
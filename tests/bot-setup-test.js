const chai = require('chai')
const expect = chai.expect
const http = require('http')
const MultiBot = require('../src/multibot')


let multibot = new MultiBot();

describe('Webhook Server', function() {

  before(function () {
    multibot.startServer(8000);
  });

  it('should return 200', function() {
    http.get('http://localhost:8000', function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  // it('should throw invalid token', function(){
  //   multibot.addBot('INVALID_TOKEN')
  // });

  after(function () {
    multibot.stopServer();
  });

});

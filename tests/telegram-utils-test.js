const chai = require('chai')
const expect = chai.expect
const http = require('http')
const TelegramUtils = require('./../src/telegramUtils')


describe('TelegramUtils Test', function() {

  it('Token should be valid', function() {
    expect(TelegramUtils.isValidToken("123456789:AAE_WJeKRwjRtR89-Qx6Kmm9ilfrCZKqpy8")).to.be.true;
  });

  it('Token should be invalid', function() {
    expect(TelegramUtils.isValidToken("AAE_WJeKRwjRtR89-Qx6Kmm9ilfrCZKqpy8")).to.be.false;
  });

});

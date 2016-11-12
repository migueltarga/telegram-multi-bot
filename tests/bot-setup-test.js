const chai = require('chai')
const expect = chai.expect
const MultiBot = require('./../src/multibot')

describe('Setup', ()=> {
  // Sample Unit Test
  it('bot.token should return Empty before setup', ()=> {
    let multibot = new MultiBot()
    expect(multibot.token).to.be.empty
  });

});

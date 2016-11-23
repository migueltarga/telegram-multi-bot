const Plugin = require('./../plugin')

class Test extends Plugin {

  constructor(emitter){
    super(emitter)
  }

  onText(req){
    console.log('OnText', req);
  }
}

module.exports = Test

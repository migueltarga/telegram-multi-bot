const Plugin = require('./../plugin')

module.exports = class Echo extends Plugin {

  constructor(emitter){
    super(emitter)
  }

  onText(req){
    console.log('OnText', req);
  }
}

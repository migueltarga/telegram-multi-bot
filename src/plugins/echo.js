const Plugin = require('./../plugin')

class Echo extends Plugin {

	constructor(emitter){
		super(emitter)
	}

	onText(req){
		console.log('OnText', req)
	}
}
module.exports = Echo

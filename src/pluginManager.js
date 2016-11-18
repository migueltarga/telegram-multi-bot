const EventEmitter = require('events')


class PluginManager extends EventEmitter {

	constructor() {
		super()
		this.setMaxListeners(Infinity)
	}

}

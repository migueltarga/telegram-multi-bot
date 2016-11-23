const EventEmitter = require('events')

class Plugin {

	constructor(listener) {
		if (typeof this.onText === 'function') listener.on("text", (...args) => this.onText(...args));
	}

	get detail() {
		return {
			name: "Plugin",
			description: "Description"
		}
	}

}

module.exports = Plugin

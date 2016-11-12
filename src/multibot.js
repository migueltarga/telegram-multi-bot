'use strict'

const http = require('http')

class MultiBot {

	constructor() {
		this.server = http.createServer((req, res) => this._webHookHandler(req, res))
	}

	startServer (port) {
		this.server.listen(port)
	}

	stopServer(){
		this.server.close()
	}
	
	_webHookHandler (request, response) {
		return response
	}

}

module.exports = MultiBot

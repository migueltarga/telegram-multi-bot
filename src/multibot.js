'use strict'

const http = require('http')

class MultiBot {

	constructor() {
		this.server = http.createServer((req, res) => this._webHookHandler(req, res))
	}

	startServer (port) {
		this.server.listen(port, () => {
			console.log('Server started on port: ', port)
		})
	}


	_webHookHandler (request, response) {

	}

}

module.exports = MultiBot

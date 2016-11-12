'use strict'

const http = require('http')
const TelegramUtils = require('./telegramutils')

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

	addBot(token){
		//TelegramUtils.getUsername
	}

	_webHookHandler (request, response) {
		return response
	}

}

module.exports = MultiBot

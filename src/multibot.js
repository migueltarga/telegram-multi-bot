'use strict'

const http = require('http')
//const Bot = require('./model/bot')
//const TelegramUtils = require('./telegramutils')


class MultiBot {

	constructor() {
		this.mongoose = require('mongoose')
		this.server = http.createServer((req, res) => this._webHookHandler(req, res))
		//this.pluginManager = new PluginManager(this);
	}

	startServer (port) {
		this.mongoose.connect('mongodb://localhost/multibot')
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

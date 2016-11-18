
'use strict'

//const get = require('simple-get');

class TelegramUtils {

	constructor () {
		this.baseUrl = 'https://api.telegram.org/bot'
	}

	isValidToken (_token) {
		return /^\d+:[\d\w-_]+$/.test(_token)
	}

}

module.exports = new TelegramUtils()

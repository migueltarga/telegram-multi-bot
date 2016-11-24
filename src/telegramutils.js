
'use strict'

const get = require('simple-get')

class TelegramUtils {

	constructor () {
		this.baseUrl = 'https://api.telegram.org/bot'
	}

	isValidToken (_token) {
		return /^\d+:[\d\w-_]+$/.test(_token)
	}

	getMe (token, success, error) {
		get.concat({
			url: `${this.baseUrl}${token}/getMe`,
			json: true
		}, (err, res, data) => {
			if (error && (err || !data || !data.ok)) return error(err)
			if (success && data.ok) success(data.result)
		})
	}

	setWebhook (token, url, success, error) {
		get.concat({
			url: `${this.baseUrl}${token}/setWebhook?url=${url}/${token}`,
			json: true
		}, (err, res, data) => {
			if (error && (err || !data || !data.ok)) return error(err)
			if (success && data.ok) success(data.result)
		})
	}

}

module.exports = new TelegramUtils()

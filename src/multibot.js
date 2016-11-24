'use strict'

const http = require('http')
const fs = require('fs')
const EventEmitter = require('events')
const Bot = require('./model/bot')
const TelegramUtils = require('./telegramutils')

class MultiBot extends EventEmitter {

	constructor(config) {
		super()
		this.config = config || {}
		if(this.config.admin){
			this.addBot(this.config.admin)
		}
		this.mongoose = require('mongoose')
		this.mongoose.Promise = global.Promise
		this.server = http.createServer((req, res) => this._webHookHandler(req, res))

		return this
	}

	startServer () {
		this.mongoose.connect(this.config.mongodb)
		this.server.listen(this.config.port || 8000)
		this._loadPlugins()
	}

	stopServer(){
		this.mongoose.connection.close()
		this.server.close()
	}

	addBot(token){
		TelegramUtils.getMe(token, (res)=>{
			console.log(res)
			TelegramUtils.setWebhook(token, this.config.url)
			let newBot = new Bot({
				name: res.first_name,
				username: res.username,
				token: token
			})
			let upsertData = newBot.toObject()
			delete upsertData._id
			Bot.update({token: newBot.token}, upsertData, {upsert: true})
		})
	}

	_loadPlugins () {
		fs.readdir('./src/plugins', (err, files) => {
			if (err || !files.length) return
			files.forEach((file) => {
				console.log('Loading Plugins: ', file)
				let plugin = require('./plugins/' + file)
				new plugin(this)
			})
		})
	}

	_webHookHandler (request, response) {
		let token = request.url.match(/^\/(\d+:[\d\w-_]+)$/)
		if (!token) {
			response.statusCode = 404
			return response.end()
		}
		let chunks = []
		request.on('data', data => chunks.push(data))
		request.on('end', () => {
			response.end('OK!')
			let data = Buffer.concat(chunks).toString('utf-8')
			Bot.findOne({token:token[1]}).then((_bot)=>{
				this._parseRequest(data,_bot)
			})
		})
	}

	_parseRequest (data, bot) {
		try {
			var req = JSON.parse(data)
		} catch(err) {
			return
		}
		req.bot = bot
		let _messageTypes = [
			'text', 'audio', 'document', 'photo', 'sticker', 'video', 'voice', 'contact',
			'location', 'new_chat_participant', 'left_chat_participant', 'new_chat_title',
			'new_chat_photo', 'delete_chat_photo', 'group_chat_created'
		]
		_messageTypes.forEach((messageType) => {
			if (req['message'][messageType]) {
				this.emit(messageType, req)
			}
		})
	}

}

module.exports = MultiBot

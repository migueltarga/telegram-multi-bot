
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let botSchema = new Schema({
	name: String,
	token: { type: String, required: true, unique: true },
	created_at: Date,
	updated_at: Date
})

botSchema.pre('save', function(next) {
	let currentDate = new Date()
	this.updated_at = currentDate
	if (!this.created_at) this.created_at = currentDate
	next()
})

let Bot = mongoose.model('Bot', botSchema)

module.exports = Bot

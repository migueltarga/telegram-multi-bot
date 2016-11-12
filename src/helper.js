
'use strict'

class Helper {

	constructor() {}

	isValidToken(_token){
		return /^\d+:[\d\w-_]+$/.test(_token)
	}

}

module.exports = new Helper()

const bot = require('./src/multibot')

let MultiBot = new bot({
  url: 'https://243978d7.ngrok.io',
  port: 8000,
  mongodb : 'mongodb://localhost/multibot',
  admin: '260521356:AAE_WgeKhwjRtR89-QX6Kwm9ikfrCZKQpy8'
}).startServer()

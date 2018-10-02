const mongoose = require('mongoose')

const mongoUrl = 'mongodb://127.0.0.1/neoland'
mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})
const express = require('express')
const app = express()
// const bodyparser = require('body-parser')
// app.use(bodyparser.urlencoded({ extended: false }))
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.listen(4500, function () {
  console.log('running')
})

const express = require('express')

const cors = require('cors')
const app = express()
app.use(cors())
app.set('Access-Control-Allow-Origin', '*')


app.use(express.json())


app.use('/', function (req, res) {
  res.json({ connected: 'assigner' })
})
// Middleware for Errors = last
module.exports = app

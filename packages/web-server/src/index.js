const express = require('express')
const app = express()
const path = require('path')
const route = require('./routes/index')
const db = require('./config/db/index')
const port = 5000

// Middleware
app.use(express.urlencoded({
  extended: true
})); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

// Static files
app.use(express.static(path.join(__dirname, 'public'))) 

db.connect()
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
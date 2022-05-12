const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const cookies = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config()
require('./utils/dbConnection').config()

const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: true })) // Handling form data
app.use(express.json()) // Handling JSON data
app.use(cookies())
app.use(compression())

// Middleware for checking user authentication
const checkAuth = (req, res, next) => {
  if (
    typeof req.cookies.authToken === 'undefined' ||
    req.cookies.authToken === null
  ) {
    req.user = null
  } else {
    const token = req.cookies.authToken
    const decodedToken = jwt.decode(token, { complete: true }) || {}
    req.user = decodedToken.payload
  }

  next()
}

app.use(checkAuth)

const routes = require('./routes')
app.use('/api', routes)

app.get('*', (req, res) => {
  res.send('hello')
})

module.exports = app

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
require('dotenv').config()
const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: true })) // Handling form data
app.use(express.json()) // Handling JSON data
app.use(compression())

const routes = require('./routes')
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('hello')
})

module.exports = app

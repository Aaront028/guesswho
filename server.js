const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()
server.use(express.static('public'))

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', userRoutes)

module.exports = server

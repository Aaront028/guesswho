const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUserById,
  getUsers,
}

function getUsers(db = connection) {
  return db('manaia').select()
}

function getUserById(id, db = connection) {
  return db('manaia').where('id', id).first()
}

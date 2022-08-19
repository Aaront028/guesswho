const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUserById,
  getUsers,
  close,
}

function getUsers(db = connection) {
  return db('manaia').select()
}

function getUserById(id, db = connection) {
  return db('manaia').where('id', id).first()
}

function close(db = connection) {
  return db.destroy()
}

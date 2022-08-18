const express = require('express')

const db = require('../db')

const router = express.Router()

//GET home page
router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.render('index', { users: users })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//GET Right page
router.get('/right/:id', (req, res) => {
  const id = req.params.id
  db.getUserById(id)
    .then((user) => {
      res.render('right', { user })
    })

    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

//GET wrong page
router.get('/wrong/:id', (req, res) => {
  const id = req.params.id
  db.getUserById(id)
    .then((user) => {
      res.render('wrong', { user })
    })

    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

// insert logic here to render either right or wrong.
//when click try again or return button, need routes for redirect to home
//USE HBS for redirect to home
module.exports = router

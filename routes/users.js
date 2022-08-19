const express = require('express')

const db = require('../db')

const router = express.Router()

//GET home page
router.get('/', (req, res) => {
  let peopleNum = 4
  let randomPerson = Math.floor(Math.random() * peopleNum) + 1
  console.log(randomPerson)
  db.getUsers()
    .then((users) => {
      let currentObject = users.find((item) => {
        return item.id === randomPerson
      })
      let currentQuote = currentObject.quote

      res.render('index', { users, currentQuote, id: currentObject.id })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// profile/id
// req.body for id random number

router.get('/check/:id', (req, res) => {
  let clickedPerson = req.params.id
  let quotePerson = req.query.quoteid
  // let currentObject = users.find((item) => {
  //   return item.id === randomPerson
  // })
  db.getUsersById(clickedPerson)

    .then((user) => {
      if (clickedPerson === quotePerson) {
        res.redirect(`/right/${clickedPerson}`, { user })
      } else {
        res.redirect(`/wrong/${clickedPerson}`, { user })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
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

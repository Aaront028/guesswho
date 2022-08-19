const express = require('express')

const db = require('../db')

const router = express.Router()

//GET home page
router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      let peopleNum = users.length
      let randomPerson = Math.floor(Math.random() * peopleNum) + 1
      console.log(randomPerson)
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

router.get('/check/:id', (req, res) => {
  let clickedPerson = req.params.id
  let quotePerson = req.query.quoteid

  db.getUserById(clickedPerson)

    .then(() => {
      if (clickedPerson === quotePerson) {
        res.redirect(`/right/${clickedPerson}`)
      } else {
        res.redirect(`/wrong/${clickedPerson}`)
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
      res.render('right', user)
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
      res.render('wrong', user)
    })

    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

module.exports = router

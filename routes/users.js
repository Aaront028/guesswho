const express = require('express')

const db = require('../db')

const router = express.Router()

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

      res.render('index', { users, currentQuote })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//getting the object from usere that mathces randomPerson  that id and then getting quote
//
//}
// const powerData = powerDataJson.superPower.find((item) => {
//   return item.id == randomPerson
// })

// random number home page

// /profile/:id
//if statement

//  let randomnumber = Math.floor(Math.random() * 6) + 1
// let randomPerson = Math.floor(Math.random() * peopleNum) + 1
// our randomly generated correct answer
// quote =

// if( req.params.id === users.id){
// res.render('right', { users: users })}
// else {
//   res.render('wrong', { users: users })
// }

// insert logic here to render either right or wrong.
//   call the informtion from the database
//   get the click information i.e the users guess
//
//   check that against the correct answer (the quote and ids match)
//   if correct: send them to the right page
//   if wrong send them to the wrong page

module.exports = router

// exports.seed = function (knex) {
//   return knex('users').insert([
//     { id: 99901, name: 'test user 1', email: 'test1@users.net' },
//     { id: 99902, name: 'test user 2', email: 'test2@users.net' },
//     { id: 99903, name: 'test user 3', email: 'test3@users.net' },
//   ])
// }

exports.seed = function (knex) {
  return knex('manaia').insert([
    {
      id: 1,
      name: 'Eli Bing',
      img: '/images/elizabeth.png',
      quote: 'Give me onion rings',
    },
    {
      id: 2,
      name: 'JP',
      img: '/images/jp.png',
      quote: "I'm just vibing",
    },
    {
      id: 3,
      name: 'Aaron',
      img: '/images/aaron.png',
      quote: 'I like cacti',
    },
    {
      id: 4,
      name: 'Jeremy',
      img: '/images/jeremy.png',
      quote: 'I play the guitar',
    },
    {
      id: 5,
      name: 'Ash',
      img: '/images/ash.png',
      quote: "Now you see me, now you don't",
    },
  ])
}

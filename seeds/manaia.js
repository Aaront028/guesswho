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

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
    {
      id: 6,
      name: 'Bleu',
      img: '/images/bleu.png',
      quote: 'Howling at the moon',
    },
    {
      id: 7,
      name: 'Craig',
      img: '/images/craig.png',
      quote: 'Broken wing',
    },
    {
      id: 8,
      name: 'David',
      img: '/images/david.png',
      quote: 'I guess I should know what I should say...',
    },
    {
      id: 9,
      name: 'Edan',
      img: '/images/edan.png',
      quote: 'Cute cat zoomies',
    },
    {
      id: 10,
      name: 'Grant',
      img: '/images/grant.png',
      quote: 'Amsterdam',
    },
    {
      id: 11,
      name: 'Hamish',
      img: '/images/hamish.png',
      quote: 'I have recently moved',
    },
    {
      id: 12,
      name: 'Kim',
      img: '/images/kim.png',
      quote: 'Wines in Welly',
    },
    {
      id: 13,
      name: 'Krissy',
      img: '/images/krissy.png',
      quote: 'I hope the weather in Queenstown is good',
    },
    {
      id: 14,
      name: 'Lewis',
      img: '/images/lewis.png',
      quote: 'I can spin a basketball on ANYTHING',
    },
    {
      id: 15,
      name: 'Ling',
      img: '/images/ling.png',
      quote: 'Cute bubba',
    },
    {
      id: 16,
      name: 'Maryann',
      img: '/images/maryann.png',
      quote: 'I can teach you',
    },
    {
      id: 17,
      name: 'Max',
      img: '/images/max.png',
      quote: '🎃de-facto team member🎃',
    },
    {
      id: 18,
      name: 'Paul',
      img: '/images/paul.png',
      quote: 'Watch my zoom clone',
    },
    {
      id: 19,
      name: 'Peter',
      img: '/images/peter.png',
      quote: "I'm telling on you",
    },
    {
      id: 20,
      name: 'Ramesh',
      img: '/images/ramesh.png',
      quote: 'k-pop FTW!',
    },
    {
      id: 21,
      name: 'Sarah',
      img: '/images/sarah.png',
      quote: 'Seems to like starwars.',
    },
    {
      id: 22,
      name: 'Sylvia',
      img: '/images/sylvia.png',
      quote: 'Morning pint of coffee',
    },
    {
      id: 23,
      name: 'Trish',
      img: '/images/trish.png',
      quote: 'YATTAAA!',
    },
    {
      id: 24,
      name: 'Veeta',
      img: '/images/veeta.png',
      quote: 'Merv has a tail!',
    },
  ])
}

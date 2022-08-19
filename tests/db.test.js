const knex = require('knex')
const config = require('../knexfile')
const test = knex(config.test)

const func = require('../db')

beforeAll(() => {
  return test.migrate.latest()
})

beforeEach(() => {
  return test.seed.run()
})

afterAll(() => {
  return func.close(test)
})

describe('read function', () => {
  it('returns all students in manaia', () => {
    return func.getUsers(test).then((data) => {
      expect(data).toHaveLength(5)
    })
  })
})

// /* eslint-disable jest/no-conditional-expect */
// const testEnv = require('./test-environment')
// const db = require('../db')

// let testDb = null

// beforeEach(() => {
//   testDb = testEnv.getTestDb()
//   return testEnv.initialise(testDb)
// })

// afterEach(() => testEnv.cleanup(testDb))

// test('getUsers gets all users', () => {
//   // One for each letter of the alphabet!
//   const expected = 3
//   return db
//     .getUsers(testDb)
//     .then((users) => {
//       const actual = users.length
//       expect(actual).toBe(expected)
//     })
//     .catch((err) => expect(err).toBeNull())
// })

// test('getUser gets a single user', () => {
//   const expected = 'test user 1'
//   return db
//     .getUserById(99901, testDb)
//     .then((user) => {
//       const actual = user.name
//       expect(actual).toBe(expected)
//     })
//     .catch((err) => expect(err).toBeNull())
// })

const knex = require('knex')
const config = require('./knexfile')
const test = knex(config.test)

const func = require('./db')

beforeAll(() => {
  return test.migrate.latest()
})

beforeEach(() => {
  return test.seed.run()
})

afterAll(() => {
  return func.close(test)
})

describe('read', () => {
  it('returns all students in manaia', () => {
    return func.getUsers(test).then((data) => {
      console.log(data)
      expect(data).toHaveLength(5)
    })
  })
})

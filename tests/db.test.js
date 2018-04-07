const env = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialize(testDb)
})

afterEach(() => {
  return env.cleanup(testDb)
})


test('test the testing evironment', () => {
  expect(true).toBeTruthy()
})

test('getItems returns all the store items', () => {
  const expected = 8
  return db.getItems(testDb)
    .then(items => {
      const actual = items.length
      expect(actual).toBe(expected)
    })
})
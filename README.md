# DB test environment initialize

## Basic test environment setup
- Create repository 
- yarn init -y
- add dependencies and devDependencies
```
  "devDependencies": {
    "jest": "^22.4.3",
    "nodemon": "^1.17.3"
  },
  "dependencies": {
    "express": "^4.16.3",
    "express-handlebars": "^3.0.0",
    "knex": "^0.14.4",
    "sqlite3": "^4.0.0"
  }
  ```
- add scripts into package.json
```
  "scripts": {
    "start": "nodemon index",
    "test": "jest"
  },
```
- create a tests folder and create a db.test.js file inside
- write a test case to try if the test environment is ok.
```
test('test the testing evironment', () => {
  expect(true).toBeTruthy()
})
```

## DB test environment setup
- Create a test-environment.js in tests folder and setup as below
```
const getDbConn = require('knex')

const testConfig = require('../knexfile').test

module.exports = {
  getTestDb: () => getDbConn(testConfig),
  initialize: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },
  cleanup: (db) => {
    return db.destroy()
  }
}
```

- Copy seed folder into tests folder

- Add test setup into knexfile.js
```
  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    seeds: {
      directory: './tests/seeds'
    },
    useNullAsDefault: true
  }
```

- Add below setup into db.test.js
```
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
```

## Add test cases into db.test.js
- remember to pass ```testDb``` into functions you wanna test to replace the knex setup to "test" in knexfile
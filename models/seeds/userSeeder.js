const User = require('../user.js')
const db = require('../../config/mongoose.js')

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

db.once('open', () => {
  User.create(users)
    .then(() => {
      console.log('done.')
      db.close()
    })
    .catch(error => console.log(error))
    .finally(() => process.exit())
})

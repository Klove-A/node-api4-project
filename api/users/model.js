const { nanoid } = require('nanoid')

function getId() {
  return nanoid().slice(0, 5)
}

const initializeUsers = () => ([
  { id: getId(), username: "Greg", password: "secret" },
  { id: getId(), username: "Fill", password: "supr-sekret" },
])

let users = initializeUsers()

const find = () => {
  return Promise.resolve(users)
}

const insert = ({ username, password }) => {
  const newUser = { id: getId(), username, password }
  users.push(newUser)
  return Promise.resolve(newUser)
}

module.exports = {
  find,
  insert
}


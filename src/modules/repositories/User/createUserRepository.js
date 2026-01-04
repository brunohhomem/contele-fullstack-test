const { client } = require('../../common/handlers')

const createUserRepository = async ({ user } = {}) => {
  const [id] = await client('users').insert(user)
  return { id }
}

module.exports = {
  createUserRepository
}

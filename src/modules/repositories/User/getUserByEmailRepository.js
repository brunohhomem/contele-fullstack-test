const { client } = require('../../common/handlers')

const getUserByEmailRepository = async (user_email = {}) => {
  const user = await client('users').where({ user_email }).first()
  return user
}

module.exports = {
  getUserByEmailRepository
}

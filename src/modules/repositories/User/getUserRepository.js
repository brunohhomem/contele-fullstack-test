const { client } = require('../../common/handlers')

const getUserRepository = async ({ user_id } = {}) => {
  const user = await client('users').where({ id: user_id }).first()
  return user
}

module.exports = {
  getUserRepository
}

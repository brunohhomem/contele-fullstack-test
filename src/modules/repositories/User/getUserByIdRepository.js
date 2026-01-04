const { client } = require('../../common/handlers')

const getUserByIdRepository = async ({ user_id } = {}) => {
  const user = await client('users').where({ id: user_id }).first()
  return user
}

module.exports = {
  getUserByIdRepository
}

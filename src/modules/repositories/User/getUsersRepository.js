const { client } = require('../../common/handlers')

const getUsersRepository = async () => {
  const response = await client('users')

  return response.map(({ user_password, ...user }) => user)
}

module.exports = {
  getUsersRepository
}

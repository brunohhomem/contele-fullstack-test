const { client } = require('../../common/handlers')

const getUsersRepository = async () => {
  const response = await client('users')

  return {
    users: response
  }
}

module.exports = {
  getUsersRepository
}

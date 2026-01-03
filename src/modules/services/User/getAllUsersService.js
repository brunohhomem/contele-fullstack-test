const { getUsersRepository } = require('../../repositories')

const getAllUsersService = async () => {
  const { users = [] } = await getUsersRepository()

  const has_multiple_user = Array.isArray(users) && users.length > 0

  return {
    users,
    has_multiple_user
  }
}

module.exports = {
  getAllUsersService
}

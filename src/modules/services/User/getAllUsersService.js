const { getUsersRepository } = require('../../repositories')

const getAllUsersService = async () => {
  return await getUsersRepository()
}

module.exports = {
  getAllUsersService
}

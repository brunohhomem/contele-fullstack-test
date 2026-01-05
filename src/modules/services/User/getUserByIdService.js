const { getUserByIdRepository } = require('../../repositories')

const getUserByIdService = async user_id => {
  const user = await getUserByIdRepository({ user_id })
  return { user }
}

module.exports = {
  getUserByIdService
}

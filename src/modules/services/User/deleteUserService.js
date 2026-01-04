const {
  getUserByIdRepository,
  deleteUserRepository
} = require('../../repositories')

const deleteUserService = async ({ user_id }) => {
  const user = await getUserByIdRepository({ user_id })

  if (!user) {
    throw new Error('User not found.')
  }

  await deleteUserRepository({
    user_id
  })
}

module.exports = {
  deleteUserService
}

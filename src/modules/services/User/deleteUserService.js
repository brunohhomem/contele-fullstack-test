const {
  getUserRepository,
  deleteUserRepository
} = require('../../repositories')

const deleteUserService = async ({ user_id }) => {
  const user = await getUserRepository({ user_id })

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

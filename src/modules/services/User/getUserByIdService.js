const { getUserRepository } = require('../../repositories')

const getUserByIdService = async ({ user_id }) => {
  if (!user_id) {
    return {
      user: null,
      has_single_user: false
    }
  }

  const user = await getUserRepository({ user_id })

  return {
    user,
    has_single_user: !!user
  }
}

module.exports = {
  getUserByIdService
}

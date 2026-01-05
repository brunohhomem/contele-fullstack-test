const { getUserByIdService } = require('../User/getUserByIdService')
const { getPostByUserIdRepository } = require('../../repositories')

const getPostByUserIdService = async ({ user_id }) => {
  const { user } = await getUserByIdService(user_id)

  if (!user) {
    throw new Error('Author not found.')
  }

  const { posts = [] } = await getPostByUserIdRepository({ user_id })

  return { posts }
}

module.exports = {
  getPostByUserIdService
}

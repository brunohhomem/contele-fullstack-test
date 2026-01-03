const { getUserByIdService } = require('../User/getUserByIdService')
const { createPostRepository } = require('../../repositories')

const createPostService = async post => {
  const { author_id } = post

  const { user } = await getUserByIdService({
    user_id: author_id
  })

  if (!user) {
    throw new Error("Hasn't author in database")
  }

  const post_created = await createPostRepository({
    post
  })

  return {
    post_created_id: post_created
  }
}

module.exports = {
  createPostService
}

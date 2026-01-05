const { getUserByIdService } = require('../User/getUserByIdService')
const { createPostRepository } = require('../../repositories')

const createPostService = async post => {
  const { author_id } = post

  const { user } = await getUserByIdService(author_id)

  if (!user) {
    throw new Error("Hasn't author in database")
  }

  const post_created = await createPostRepository(post)

  return {
    id: post_created[0],
    author_id: post.author_id,
    post_text: post.post_text
  }
}

module.exports = {
  createPostService
}

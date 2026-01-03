const { client } = require('../../common/handlers')

const createPostRepository = async ({ post }) => {
  const [id] = await client('posts').insert(post)
  return { id }
}

module.exports = {
  createPostRepository
}

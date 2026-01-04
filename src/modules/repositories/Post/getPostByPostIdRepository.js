const { client } = require('../../common/handlers')

const getPostByPostIdRepository = async ({ post_id } = {}) => {
  const post = await client('posts').where({ id: post_id }).first()
  return { post: post || null }
}

module.exports = {
  getPostByPostIdRepository
}

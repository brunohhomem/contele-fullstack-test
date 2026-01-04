const { client } = require('../../common/handlers')

const getPostByUserIdRepository = async ({ user_id } = {}) => {
  const posts = await client('posts').where({ author_id: user_id })
  return { posts }
}

module.exports = {
  getPostByUserIdRepository
}

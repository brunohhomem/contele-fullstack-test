const { client } = require('../../common/handlers')

const deletePostRepository = async ({ post_id }) => {
  const affectedRows = await client('posts').where({ id: post_id }).del()
}

module.exports = {
  deletePostRepository
}

module.exports = {
  deletePostRepository
}

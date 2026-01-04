const { client } = require('../../common/handlers')

const deletePostRepository = async ({ post_id }) => {
  await client('posts').where({ id: post_id }).del()
}

module.exports = {
  deletePostRepository
}

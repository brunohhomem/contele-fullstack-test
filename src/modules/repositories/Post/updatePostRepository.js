const { client } = require('../../common/handlers')

const updatePostRepository = async ({ id, author_id, post_text }) => {
  await client('posts').where({ id, author_id }).update({ post_text })
}

module.exports = {
  updatePostRepository
}

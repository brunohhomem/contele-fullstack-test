const { client } = require('../../common/handlers')

const updatePostRepository = async ({ id, author_id, post_text }) => {
  const affectedRows = await client('posts')
    .where({ id, author_id })
    .update({ post_text })

  return affectedRows === 1
}

module.exports = {
  updatePostRepository
}

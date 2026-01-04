const {
  getPostByPostIdRepository,
  deletePostRepository
} = require('../../repositories')

const deletePostService = async ({ post_id }) => {
  const { post } = await getPostByPostIdRepository({ post_id })

  if (!post) {
    throw new Error("Hasn't post to delete")
  }

  await deletePostRepository({ post_id })
}

module.exports = {
  deletePostService
}

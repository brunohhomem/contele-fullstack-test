const {
  getPostByPostIdRepository,
  updatePostRepository
} = require('../../repositories')

const updatePostService = async ({ id, author_id, post_text }) => {
  const { post } = await getPostByPostIdRepository({ post_id: id })

  if (!post) {
    throw new Error("Hasn't post to update")
  }

  if (post.author_id !== author_id) {
    throw new Error('Author not allowed to update this post')
  }

  await updatePostRepository({
    id,
    author_id,
    post_text
  })

  return {
    updatedPost: {
      id,
      author_id,
      post_text
    }
  }
}

module.exports = {
  updatePostService
}

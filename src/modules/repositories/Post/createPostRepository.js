const { client } = require('../../common/handlers')

const createPostRepository = async post => {
  return await client('posts').insert(post)
}

module.exports = {
  createPostRepository
}

module.exports = Object.freeze({
  ...require('./User/getUserRepository'),
  ...require('./User/getUsersRepository'),
  ...require('./User/createUserRepository'),
  ...require('./User/deleteUserRepository'),
  ...require('./User/updateUserRepository'),
  ...require('./Post/createPostRepository'),
  ...require('./Post/deletePostRepository'),
  ...require('./Post/getPostByPostIdRepository'),
  ...require('./Post/getPostByUserIdRepository'),
  ...require('./Post/updatePostRepository')
})

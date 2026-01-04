module.exports = Object.freeze({
  ...require('./User/getUserByIdRepository'),
  ...require('./User/getUserByEmailRepository'),
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

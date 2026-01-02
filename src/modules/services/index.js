module.exports = Object.freeze({
  ...require('./User/getAllUsersService'),
  ...require('./User/getUserByIdService'),
  ...require('./User/createUserService'),
  ...require('./User/deleteUserService'),
  ...require('./User/updateUserService'),
  ...require('./Post/createPostService'),
  ...require('./Post/listPostService'),
  ...require('./Post/deletePostService'),
  ...require('./Post/updatePostService')
})

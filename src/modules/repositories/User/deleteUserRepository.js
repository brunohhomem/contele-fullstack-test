const { client } = require('../../common/handlers')

const deleteUserRepository = async ({ user_id }) => {
  await client('users').where({ id: user_id }).del()
}

module.exports = {
  deleteUserRepository
}

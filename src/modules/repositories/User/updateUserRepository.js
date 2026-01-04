const { client } = require('../../common/handlers')

const updateUserRepository = async ({
  id,
  user_email,
  user_password,
  full_name
}) => {
  await client('users')
    .where({ id })
    .update({ user_email, user_password, full_name })
}

module.exports = {
  updateUserRepository
}

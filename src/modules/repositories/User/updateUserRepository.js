const { client } = require('../../common/handlers')

const updateUserRepository = async ({
  id,
  user_email,
  user_password,
  full_name
}) => {
  const user_id = await client('users')
    .where({ id })
    .update({ user_email, user_password, full_name })

  return { user_id }
}

module.exports = {
  updateUserRepository
}

const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const {
  getUserRepository,
  updateUserRepository
} = require('../../repositories')

const updateUserService = async ({
  id,
  user_email,
  user_password,
  full_name
}) => {
  const user_id = id
  const user = await getUserRepository({ user_id })

  if (!user) {
    throw new Error('User not found.')
  }

  await updateUserRepository({
    id,
    full_name: full_name ?? user.full_name,
    user_email: user_email ?? user.user_email,
    user_password: user_password
      ? bcrypt.hashSync(user_password, salt)
      : user.user_password
  })
}

module.exports = {
  updateUserService
}

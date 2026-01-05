const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const {
  createUserRepository,
  getUserByEmailRepository
} = require('../../repositories')

const createUserService = async user => {
  const email_exists = await getUserByEmailRepository(user.user_email)

  if (email_exists) {
    throw new Error('Email already in use')
  }

  const crypt_password = bcrypt.hashSync(user.user_password, salt)

  const user_created = await createUserRepository({
    user: {
      ...user,
      user_password: crypt_password
    }
  })

  return {
    id: user_created.id,
    full_name: user.full_name,
    user_email: user.user_email
  }
}

module.exports = {
  createUserService
}

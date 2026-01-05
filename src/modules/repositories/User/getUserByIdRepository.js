const { client } = require('../../common/handlers')

const getUserByIdRepository = async ({ user_id } = {}) => {
  user_id = Number(user_id)

  if (!Number.isInteger(user_id)) {
    throw new Error('user_id inválido no getUserByIdRepository')
  }

  const user = await client('users').where({ id: user_id }).first()

  if (!user) return null

  return {
    id: user.id,
    full_name: user.full_name,
    user_email: user.user_email
  }
}

module.exports = {
  getUserByIdRepository
}

const {
  getTransaction,
  commitTransaction,
  rollbackTransaction
} = require('../../common/handlers')

const createUserRepository = async ({ user } = {}) => {
  const { transaction } = await getTransaction()

  try {
    const [user_id] = await transaction('users').insert(user)

    if (!user_id) {
      throw new Error('User registration failed.')
    }

    await commitTransaction({ transaction })

    return {
      user_id
    }
  } catch (err) {
    rollbackTransaction({ transaction })
    throw new Error(err)
  }
}

module.exports = {
  createUserRepository
}

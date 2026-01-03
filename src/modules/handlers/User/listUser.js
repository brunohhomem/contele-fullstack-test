'use strict'

const httpStatusCodes = require('http-status-codes')
const { httpErrorHandler } = require('../../common/handlers')
const { getUserByIdService, getAllUsersService } = require('../../services')

const listUserHandler = async (req, res) => {
  try {
    const { user_id } = req.query

    const hasUserId = Number.isInteger(Number(user_id))

    if (hasUserId) {
      const { user } = await getUserByIdService({ user_id })

      return res.status(httpStatusCodes.OK).send({ users: user })
    }

    const { users } = await getAllUsersService()

    return res.status(httpStatusCodes.OK).send({ users })
  } catch (error) {
    return httpErrorHandler({ req, res, error })
  }
}

module.exports = {
  listUserHandler
}

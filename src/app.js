'use strict'

require('dotenv').config()

const cors = require('cors')
const SwaggerExpress = require('swagger-express-mw')
const SwaggerUi = require('swagger-ui-express')
const express = require('express')
const { buildHandlers } = require('./modules')
const { handlers } = buildHandlers()

const port = Number(process.env.PORT)

if (!port || Number.isNaN(port)) {
  throw new Error('Environment variable PORT is required and must be a number')
}

const app = express()

const whitelist = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map(o => o.trim())
  : []

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)

      if (whitelist.includes(origin)) return callback(null, true)

      return callback(null, false)
    }
  })
)

const swaggerConfig = {
  appRoot: __dirname,
  swaggerFile: `${__dirname}/config/swagger.yaml`
}

const onSwaggerCreated = (error, swaggerExpress) => {
  if (error) throw error

  const swaggerDocument = swaggerExpress.runner.swagger
  app.use('/api/v1/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument))
  swaggerExpress.register(app) // register middlewares
  app.listen(port, () => console.info('onAppStart', { port }))
}

SwaggerExpress.create(swaggerConfig, onSwaggerCreated)

module.exports = {
  app,
  ...handlers
}

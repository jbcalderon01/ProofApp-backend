
import { config } from './config'

import { createServer } from 'http'

import 'module-alias/register'
import 'express-async-errors'
import { createRestServer } from '@config/server/rest.server'

import { ErrorMiddleware } from './common/middleware'

// REST Router

// init rest server
const app = createRestServer()

// Create an init the server
const httpServer = createServer(app)

// Error Middleware handling
app.use(ErrorMiddleware)

// Start REST Server
httpServer.listen(config.API.PORT, () => {
    console.log(`server listen ${ config.API.PROTOCOL }//:${ config.API.HOST }:${ config.API.PORT }`)
})

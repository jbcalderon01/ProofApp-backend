
import { createServer } from 'http'

import { config } from './config/index'

import 'module-alias/register'
import 'express-async-errors'
import { createRestServer } from './config/server/rest.server'

// REST Router

// init rest server
const app = createRestServer()

// Create an init the server
const httpServer = createServer(app)

// Start REST Server
httpServer.listen(config.API.PORT, () => {
    console.log(`server listen ${ config.API.PROTOCOL }//:${ config.API.HOST }:${ config.API.PORT }`)
})

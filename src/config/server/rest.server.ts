
// Libraries
import { join } from 'path'

import morgan from 'morgan'
import express, { Application } from 'express'
import cors from 'cors'
// Import Router
import router from '@rest/index'

export function createRestServer (): Application {
    const app = express()

    // MiddleWares
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ extended: true, limit: '70mb' }))
    app.use(morgan('dev'))
    app.use(cors())

    // Static files
    app.use('/public', express.static(join(__dirname, '..', '..', '..', 'public')))

    // Router
    app.use('/', router)

    return app
}

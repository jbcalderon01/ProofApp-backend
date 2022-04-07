
import express, { Application } from 'express'
import cors from 'cors'

import router from '../../api/rest'

export function createRestServer (): Application {
    const app = express()

    // MiddleWares
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ extended: true, limit: '70mb' }))
    app.use(cors())

    // Router
    app.use('/', router)

    return app
}

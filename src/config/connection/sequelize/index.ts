import { Sequelize } from 'sequelize'
import { Sequelize as TSequelize } from 'sequelize/types'

import { config } from '../..'

let dbInstance: TSequelize | null = null

export default function sequelizeDB(): Sequelize {
    if (!dbInstance) {
        dbInstance = new Sequelize(
            config.DB.SEQUELIZE.NAME,
            config.DB.SEQUELIZE.USER,
            config.DB.SEQUELIZE.PASS,
            {
                host: config.DB.SEQUELIZE.HOST,
                dialect: 'mysql'
            }
        )
    }

    return dbInstance
}


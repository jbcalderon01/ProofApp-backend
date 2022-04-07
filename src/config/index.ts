
import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') dotenv.config()

/**
 * Config Object
*/
export const config = {
    API: {
        PORT: process.env.API_PORT || 4050,
        VERSION: process.env.API_VERSION || 1,
        HOST: process.env.API_HOSTNAME || 'localhost',
        PROTOCOL: process.env.API_PROTOCOL || 'http',
        URL: process.env.URL || 'http://localhost:4050'
    },
    DB: {
        SEQUELIZE: {
            PASS: process.env.DB_SQL_PASS || 'root',
            NAME: process.env.DB_SQL_NAME || 'root',
            HOST: process.env.DB_SQL_HOST || 'localhost',
            PORT: process.env.DB_SQL_PORT || '3600',
            USER: process.env.DB_SQL_USER || 'root',
            DIALECT: 'mysql'
        },
    }
}

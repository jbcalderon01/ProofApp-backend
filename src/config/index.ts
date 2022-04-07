if (process.env.NODE_ENV !== 'production'){
    import ('dotenv').then(dotenv => dotenv.config())
}

/**
 * Config Object
*/
export const config = {
    API: {
        PORT: process.env.PORT || 4050,
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

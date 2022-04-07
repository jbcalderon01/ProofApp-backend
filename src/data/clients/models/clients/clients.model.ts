import { DataTypes } from 'sequelize'

import sequelizeDB from '../../../../config/connection/sequelize'

const db = sequelizeDB()

const ClientsModel = db.define('clients', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nit: {
        type: DataTypes.STRING
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
})

export default ClientsModel

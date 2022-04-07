import { DataTypes } from 'sequelize'

import sequelizeDB from '../../../config/connection/sequelize'

const db = sequelizeDB()

const CompaniesModel = db.define('companies', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
})

export default CompaniesModel

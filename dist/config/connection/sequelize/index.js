"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@config/index");
const sequelize_1 = require("sequelize");
let dbInstance = null;
function sequelizeDB() {
    if (!dbInstance) {
        dbInstance = new sequelize_1.Sequelize(index_1.config.DB.SEQUELIZE.NAME, index_1.config.DB.SEQUELIZE.USER, index_1.config.DB.SEQUELIZE.PASS, {
            host: index_1.config.DB.SEQUELIZE.HOST,
            dialect: 'mysql'
        });
    }
    return dbInstance;
}
exports.default = sequelizeDB;

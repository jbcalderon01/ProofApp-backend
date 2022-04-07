"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("../..");
let dbInstance = null;
function sequelizeDB() {
    if (!dbInstance) {
        dbInstance = new sequelize_1.Sequelize(__1.config.DB.SEQUELIZE.NAME, __1.config.DB.SEQUELIZE.USER, __1.config.DB.SEQUELIZE.PASS, {
            host: __1.config.DB.SEQUELIZE.HOST,
            dialect: 'mysql'
        });
    }
    return dbInstance;
}
exports.default = sequelizeDB;

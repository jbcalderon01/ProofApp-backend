"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("@config/connection/sequelize"));
const sequelize_2 = require("sequelize");
const db = (0, sequelize_1.default)();
const CompaniesModel = db.define('companies', {
    id: {
        primaryKey: true,
        type: sequelize_2.DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: sequelize_2.DataTypes.STRING
    },
    dni: {
        type: sequelize_2.DataTypes.STRING,
    },
    address: {
        type: sequelize_2.DataTypes.STRING,
    },
    email: {
        type: sequelize_2.DataTypes.STRING,
    },
});
exports.default = CompaniesModel;

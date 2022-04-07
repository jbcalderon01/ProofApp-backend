"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("@config/connection/sequelize"));
const sequelize_2 = require("sequelize");
const db = (0, sequelize_1.default)();
const ClientsModel = db.define('clients', {
    id: {
        primaryKey: true,
        type: sequelize_2.DataTypes.INTEGER,
        autoIncrement: true
    },
    nit: {
        type: sequelize_2.DataTypes.STRING
    },
    firstName: {
        type: sequelize_2.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_2.DataTypes.STRING,
    },
    email: {
        type: sequelize_2.DataTypes.STRING,
    },
});
exports.default = ClientsModel;

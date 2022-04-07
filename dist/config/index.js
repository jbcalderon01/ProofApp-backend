"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production')
    dotenv_1.default.config();
exports.config = {
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
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const rest_1 = __importDefault(require("../../api/rest"));
function createRestServer() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: '50mb' }));
    app.use(express_1.default.urlencoded({ extended: true, limit: '70mb' }));
    app.use((0, cors_1.default)());
    app.use('/', rest_1.default);
    return app;
}
exports.createRestServer = createRestServer;

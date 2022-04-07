"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_router_1 = __importDefault(require("./clients/clients.router"));
const companies_router_1 = __importDefault(require("./companies/companies.router"));
const router = (0, express_1.Router)();
router.get('', (req, res) => {
    res.send('Bienvenido a mi API');
});
router.use('/clients', clients_router_1.default);
router.use('/companies', companies_router_1.default);
exports.default = router;

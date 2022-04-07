"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_interactor_1 = require("../../../core/clients/clients.interactor");
const clients_datasource_1 = __importDefault(require("../../../data/clients/datasources/clients/clients.datasource"));
const clients_controller_1 = require("./clients.controller");
const clientRouter = (0, express_1.Router)();
const clientDataSource = new clients_datasource_1.default();
const clientInteractor = new clients_interactor_1.ClientInteractor(clientDataSource);
const clientController = new clients_controller_1.ClientController(clientInteractor);
clientRouter.get('/:id', clientController.getOne);
clientRouter.get('/', clientController.getAll);
clientRouter.post('/', clientController.create);
clientRouter.put('/:id', clientController.update);
clientRouter.delete('/:id', clientController.remove);
exports.default = clientRouter;

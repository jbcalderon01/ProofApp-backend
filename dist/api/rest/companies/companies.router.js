"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companies_datasource_1 = __importDefault(require("@data/companies/datasources/companies.datasource"));
const companies_interactor_1 = require("@core/companies/companies.interactor");
const companies_controller_1 = require("./companies.controller");
const companiesRouter = (0, express_1.Router)();
const companiesDataSource = new companies_datasource_1.default();
const companiesInteractor = new companies_interactor_1.CompanyInteractor(companiesDataSource);
const companiesController = new companies_controller_1.CompaniesController(companiesInteractor);
companiesRouter.get('/:id', companiesController.getOne);
companiesRouter.get('/', companiesController.getAll);
companiesRouter.post('/', companiesController.create);
companiesRouter.put('/:id', companiesController.update);
companiesRouter.delete('/:id', companiesController.remove);
exports.default = companiesRouter;

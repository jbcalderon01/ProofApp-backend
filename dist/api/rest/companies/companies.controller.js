"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesController = void 0;
const generic_1 = require("@common/generic");
class CompaniesController extends generic_1.Controller {
    constructor(interactor) {
        super(interactor);
        this.interactor = interactor;
    }
}
exports.CompaniesController = CompaniesController;

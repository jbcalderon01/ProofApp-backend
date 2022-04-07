"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInteractor = void 0;
const generic_1 = require("@common/generic");
class ClientInteractor extends generic_1.Interactor {
    constructor(repository) {
        super(repository);
        this.repository = repository;
    }
}
exports.ClientInteractor = ClientInteractor;

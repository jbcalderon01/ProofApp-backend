"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const generic_1 = require("../../../common/generic");
class ClientController extends generic_1.Controller {
    constructor(interactor) {
        super(interactor);
        this.interactor = interactor;
    }
}
exports.ClientController = ClientController;

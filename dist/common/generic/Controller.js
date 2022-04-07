"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(interactor) {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.interactor.findAll(req.query);
            res.json(data);
        });
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.interactor.findOne(req.params.id, Object.assign({}, req.query));
            res.json(data);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.interactor.create(req.body);
            res.json(data);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.interactor.update(req.params.id, req.body);
            res.json(data);
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.interactor.remove(req.params.id);
            res.json(data);
        });
        this.interactor = interactor;
    }
}
exports.Controller = Controller;

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
exports.Interactor = void 0;
const lodash_1 = require("lodash");
class Interactor {
    constructor(repository) {
        this.repository = repository;
    }
    findAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.repository.getAll(params);
            return data;
        });
    }
    findOne(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.repository.getOne(id, params);
            if ((0, lodash_1.isEmpty)(data))
                throw new Error('Resource not found');
            return data;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.save(Object.assign({}, data));
            }
            catch (error) {
                throw new Error('Error creating or bad request');
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.update(id, data);
            }
            catch (error) {
                throw new Error('Error updating or bad request');
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.remove(id);
            }
            catch (error) {
                throw new Error('Error deleting or bad request');
            }
        });
    }
}
exports.Interactor = Interactor;

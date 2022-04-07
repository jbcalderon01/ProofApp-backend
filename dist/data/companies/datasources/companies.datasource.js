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
const models_1 = require("../models");
class CompaniesDS {
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield models_1.CompaniesModel.findAll(params);
            return data;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield models_1.CompaniesModel.findByPk(id);
            return data;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield models_1.CompaniesModel.destroy({
                where: { id }
            });
            return !!res;
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield models_1.CompaniesModel.create(data);
            return res;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.CompaniesModel.update(data, {
                where: { id }
            });
            return data;
        });
    }
}
exports.default = CompaniesDS;

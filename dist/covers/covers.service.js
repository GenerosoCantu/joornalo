"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const config = require("config");
const storage_1 = require("@google-cloud/storage");
const fs = require("fs");
const envVar = config.get('gcs');
const private_key = process.env.private_key || envVar.private_key;
const storage = new storage_1.Storage({
    credentials: {
        client_email: process.env.client_email || envVar.client_email,
        private_key: private_key.replace(/\\n/g, '\n')
    },
    projectId: process.env.project_id || envVar.project_id
});
const bucket = storage.bucket(process.env.bucket || envVar.bucket);
let CoversService = class CoversService {
    constructor(httpService, coverModel) {
        this.httpService = httpService;
        this.coverModel = coverModel;
    }
    async findAll() {
        return await this.coverModel.find();
    }
    async findOne(id) {
        const found = await this.coverModel.findOne({ _id: id });
        if (!found) {
            throw new common_1.NotFoundException();
        }
        return found;
    }
    async create(cover) {
        const newCover = new this.coverModel(cover);
        fs.writeFile('data/a/' + newCover['_id'] + '.json', JSON.stringify(cover), function (err) {
            if (err)
                throw err;
        });
        return await newCover.save();
    }
    async delete(id) {
        return await this.coverModel.findByIdAndRemove(id);
    }
    async update(id, cover) {
        return await this.coverModel.findByIdAndUpdate(id, cover, { new: true });
    }
};
CoversService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('Cover')),
    __metadata("design:paramtypes", [common_1.HttpService, typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], CoversService);
exports.CoversService = CoversService;
//# sourceMappingURL=covers.service.js.map
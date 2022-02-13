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
const file_json_utils_1 = require("../utils/file-json.utils");
let NewsService = class NewsService {
    constructor(newsModel) {
        this.newsModel = newsModel;
    }
    async findAll() {
        return await this.newsModel.find();
    }
    async findOne(id) {
        console.log('findOne:', id);
        return await this.newsModel.findOne({ _id: id });
    }
    async create(news) {
        const newNews = new this.newsModel(news);
        file_json_utils_1.createNewsJsonFile('data/news/', newNews['_id'], newNews);
        return await newNews.save();
    }
    async update(id, news) {
        return await this.newsModel.findByIdAndUpdate(id, news, { new: true, useFindAndModify: false });
    }
    async delete(id) {
        return await this.newsModel.findByIdAndRemove(id);
    }
};
NewsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('News')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map
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
let StoriesService = class StoriesService {
    constructor(storyModel) {
        this.storyModel = storyModel;
    }
    async findAll(page = 0, limit = 10, section, status, sortBy = 'date', sortOrder = '-1', date = null) {
        const match = Object.assign(Object.assign(Object.assign({}, (section && { section })), (status && { status })), (date && { date: { $gte: new Date(date + ' 00:00:00'), $lte: new Date(date + ' 23:59:59') } }));
        const skip = page * limit;
        const response = await this.storyModel.aggregate([
            { $match: match },
            { '$sort': { 'date': sortOrder === '1' ? 1 : -1 } },
            {
                '$facet': {
                    metadata: [
                        { $count: "totalItems" },
                        {
                            $addFields: {
                                itemsPerPage: limit,
                                page
                            }
                        }
                    ],
                    data: [{ $skip: +skip }, { $limit: +limit }]
                }
            }
        ]);
        return {
            metadata: response[0].metadata[0],
            data: response[0].data
        };
    }
    async findOne(id) {
        console.log('findOne:', id);
        return await this.storyModel.findOne({ _id: id });
    }
    async create(story) {
        const newStory = new this.storyModel(story);
        file_json_utils_1.createStoryJsonFile('data/story/', newStory['_id'], newStory);
        return await newStory.save();
    }
    async update(id, story) {
        return await this.storyModel.findByIdAndUpdate(id, story, { new: true, useFindAndModify: false });
    }
    async delete(id) {
        return await this.storyModel.findByIdAndRemove(id);
    }
};
StoriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Story')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], StoriesService);
exports.StoriesService = StoriesService;
//# sourceMappingURL=stories.service.js.map
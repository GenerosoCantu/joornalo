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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const stories_dto_1 = require("./dto/stories.dto");
const stories_service_1 = require("./stories.service");
let StoriesController = class StoriesController {
    constructor(storiesService) {
        this.storiesService = storiesService;
    }
    findAll({ page, limit, section, status, sortBy, sortOrder, date }) {
        console.log(sortBy, ':::', sortOrder);
        return this.storiesService.findAll(page, limit, section, status, sortBy, sortOrder, date);
    }
    getStories(id) {
        return this.storiesService.findOne(id);
    }
    create(storyDto) {
        return this.storiesService.create(storyDto);
    }
    updateStory(updateStoryDto, id) {
        return this.storiesService.update(id, updateStoryDto);
    }
    delete(id) {
        return this.storiesService.delete(id);
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getStories", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stories_dto_1.StoryDto]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "create", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Patch('/:id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stories_dto_1.StoryDto, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "updateStory", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "delete", null);
StoriesController = __decorate([
    common_1.Controller('stories'),
    __metadata("design:paramtypes", [stories_service_1.StoriesService])
], StoriesController);
exports.StoriesController = StoriesController;
//# sourceMappingURL=stories.controller.js.map
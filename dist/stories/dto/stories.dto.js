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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class StoryDto {
    toJSON() {
        return class_transformer_1.classToPlain(this);
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], StoryDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], StoryDto.prototype, "section", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], StoryDto.prototype, "subsections", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], StoryDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], StoryDto.prototype, "desc", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], StoryDto.prototype, "text", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], StoryDto.prototype, "images", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], StoryDto.prototype, "embed", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], StoryDto.prototype, "quotes", void 0);
exports.StoryDto = StoryDto;
//# sourceMappingURL=stories.dto.js.map
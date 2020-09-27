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
const class_transformer_2 = require("class-transformer");
class UserDto {
    toJSON() {
        return class_transformer_2.classToPlain(this);
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    class_transformer_1.Exclude({ toPlainOnly: true }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], UserDto.prototype, "reg_time", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], UserDto.prototype, "login_fail", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], UserDto.prototype, "locked", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], UserDto.prototype, "verified", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], UserDto.prototype, "permissions", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], UserDto.prototype, "sections", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], UserDto.prototype, "modules", void 0);
exports.UserDto = UserDto;
class PermissionsDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], PermissionsDto.prototype, "permissions", void 0);
exports.PermissionsDto = PermissionsDto;
//# sourceMappingURL=user.dto.js.map
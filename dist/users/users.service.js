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
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return await this.userModel.find();
    }
    async create(user) {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }
    async update(id, user) {
        console.log('user----------------------');
        console.log(id);
        console.log(user);
        return await this.userModel.findByIdAndUpdate(id, user, { new: true, useFindAndModify: false });
    }
    async sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    async delete(id) {
        return await this.userModel.findByIdAndRemove(id);
    }
    async findOne(id) {
        console.log('findOne:', id);
        return await this.userModel.findOne({ _id: id });
    }
    async findUser(email) {
        return await this.userModel.findOne({ email: email });
    }
    async findUserProfile(email) {
        let user = await this.findUser(email);
        return {
            user
        };
    }
    async badLogin(id, login_fail) {
        const fails = (login_fail) ? login_fail + 1 : 1;
        const body = (fails > 3) ? { login_fail: fails, locked: true } : { login_fail: fails };
        return await this.userModel.findByIdAndUpdate(id, body, { new: true });
    }
    async updatePermissions(id, permissions) {
        return await this.userModel.findByIdAndUpdate(id, permissions);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
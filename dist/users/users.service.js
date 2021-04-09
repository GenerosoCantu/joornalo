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
        const users = await this.userModel.find();
        return this.buildUsers(users);
    }
    async create(user) {
        const newUser = new this.userModel(user);
        const userTmp = await newUser.save();
        return this.buildUser(userTmp);
    }
    async update(id, user) {
        const userTmp = await this.userModel.findByIdAndUpdate(id, user, { new: true, useFindAndModify: false });
        return this.buildUser(userTmp);
    }
    async sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    async delete(id) {
        const user = await this.userModel.findByIdAndRemove(id);
        return {};
    }
    async findOne(id) {
        const user = await this.userModel.findOne({ _id: id });
        return this.buildUser(user);
    }
    async findUser(email) {
        console.log('findUser:', email);
        return await this.userModel.findOne({ email: email });
    }
    async findUserProfile(email) {
        const user = await this.findUser(email);
        return this.buildUser(user);
    }
    async badLogin(id, login_fail) {
        const fails = (login_fail) ? login_fail + 1 : 1;
        const body = (fails > 3) ? { login_fail: fails, locked: true } : { login_fail: fails };
        return await this.userModel.findByIdAndUpdate(id, body, { new: true });
    }
    async updatePermissions(id, permissions) {
        return await this.userModel.findByIdAndUpdate(id, permissions);
    }
    buildUser(user) {
        const userRO = {
            _id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            role: user.role,
            reg_time: user.reg_time,
            login_fail: user.login_fail,
            locked: user.locked,
            verified: user.verified,
            status: user.status,
            modules: user.modules,
            sections: user.sections
        };
        return userRO;
    }
    buildUsers(users) {
        const usersRO = users.map((user) => {
            return {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                locked: user.locked,
                verified: user.verified,
                status: user.status
            };
        });
        return usersRO;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
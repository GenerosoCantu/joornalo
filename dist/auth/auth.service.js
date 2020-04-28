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
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.sessions = {};
    }
    async validateUser(username, pass) {
        let user = await this.usersService.findUser(username);
        if (user && user.password === pass && !user.locked) {
            return user;
        }
        if (user.locked) {
            return 403;
        }
        if (user) {
            user = await this.usersService.badLogin(user['_id'], user['login_fail']);
            if (user.locked) {
                return 403;
            }
        }
        return 401;
    }
    async login(user) {
        const payload = { username: user.username, sub: user['_id'] };
        let token = this.jwtService.sign(payload);
        this.sessions[user.username] = token;
        console.log('---------------------------------');
        console.log(this.sessions);
        return {
            access_token: token,
        };
    }
    async validateSession(token) {
        console.log('validateSession-----------------------');
        for (let [username, validToken] of Object.entries(this.sessions)) {
            console.log(`${username}: ${validToken}`);
            if (validToken == token) {
                return true;
            }
            return false;
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
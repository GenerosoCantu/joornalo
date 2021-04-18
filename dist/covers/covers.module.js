"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const covers_controller_1 = require("./covers.controller");
const covers_service_1 = require("./covers.service");
const cover_schema_1 = require("./schemas/cover.schema");
let CoversModule = class CoversModule {
};
CoversModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule, mongoose_1.MongooseModule.forFeature([{ name: 'Cover', schema: cover_schema_1.CoverSchema }])],
        controllers: [covers_controller_1.CoversController],
        providers: [covers_service_1.CoversService],
    })
], CoversModule);
exports.CoversModule = CoversModule;
//# sourceMappingURL=covers.module.js.map
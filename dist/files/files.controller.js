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
const files_service_1 = require("./files.service");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_upload_utils_1 = require("../utils/file-upload.utils");
const multer_1 = require("multer");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    async uploadedFile(file) {
        console.log(file);
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }
};
__decorate([
    common_1.Post('upload'),
    common_2.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './data/tmp',
            filename: (req, file, cb) => {
                const extension = file.originalname.split('.').pop();
                cb(null, `${file.fieldname}-${Date.now()}.${extension}`);
            },
        }),
        fileFilter: file_upload_utils_1.imageFileFilter,
    })),
    __param(0, common_2.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadedFile", null);
FilesController = __decorate([
    common_1.Controller('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map
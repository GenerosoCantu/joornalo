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
const fs = require("fs");
let FilesService = class FilesService {
    constructor() { }
    async uploadFile(file) {
        console.log('filename: ', file[0]);
        console.log('filename: ', file[0].filename);
        fs.rename('data/tmp/' + file[0].filename, 'data/b/' + file[0].originalname, (err) => {
            if (err)
                throw err;
            fs.unlink('data/tmp/' + file[0].filename, (err) => {
                console.log('originalname: ', file[0].originalname);
                console.log('Download complete!');
                return { file: file[0].originalname };
            });
        });
    }
};
FilesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map
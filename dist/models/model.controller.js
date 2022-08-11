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
exports.FolderController = void 0;
const common_1 = require("@nestjs/common");
const folder_service_1 = require("./folder.service");
let FolderController = class FolderController {
    constructor(folderService) {
        this.folderService = folderService;
    }
    async createFolder(req) {
        console.log('req.body', req.body);
        return await this.folderService.createFolder(req.body);
    }
    async getAllProjects(id, isAdmin) {
        console.log('id', id);
        console.log('isAdmin', isAdmin);
        const result = await this.folderService.getAllProjects(id, isAdmin);
        return result;
    }
    async getFoldersOfFolder(parentFolderId) {
        console.log('parentFolderId', parentFolderId);
        const result = await this.folderService.getFoldersOfFolder(parentFolderId);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Post)('getAllProjects'),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('isAdmin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "getAllProjects", null);
__decorate([
    (0, common_1.Get)('/getFoldersOfFolder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "getFoldersOfFolder", null);
FolderController = __decorate([
    (0, common_1.Controller)('folder'),
    __metadata("design:paramtypes", [typeof (_a = typeof folder_service_1.FolderService !== "undefined" && folder_service_1.FolderService) === "function" ? _a : Object])
], FolderController);
exports.FolderController = FolderController;
//# sourceMappingURL=model.controller.js.map
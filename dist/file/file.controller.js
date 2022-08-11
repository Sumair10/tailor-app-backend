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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async GetNanonetsData(data) {
        console.log("data", data);
        await this.fileService.getNanonetsData(data);
    }
    async addFile(req) {
        console.log('req.body', req.body);
        return await this.fileService.addFile(req.body);
    }
    async getAllFilesOfFolder(parent_folder_id) {
        const result = await this.fileService.getAllFiles(parent_folder_id);
        return result;
    }
    async getAllFilesOfOrganization(organization) {
        const result = await this.fileService.getAllFilesOfOrganization(organization);
        return result;
    }
    async deleteFile(fileId) {
        return await this.fileService.deleteFile(fileId);
    }
    async nanoNetApi(ids) {
        try {
            const num = await this.fileService.nanoNetApi(ids);
            return num;
        }
        catch (error) {
            console.log('errorr in controller', error);
            return error;
        }
    }
    async getAllFilesOfFolderIds(ids) {
        return await this.fileService.getAllFilesOfMultipleFolderIds(ids);
    }
    async getAllFilesOfApp() {
        const result = await this.fileService.getAllFilesOfApp();
        return result;
    }
};
__decorate([
    (0, common_1.Post)('/reciveNanonetsData'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "GetNanonetsData", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "addFile", null);
__decorate([
    (0, common_1.Get)('/getAllFilesOfFolder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "getAllFilesOfFolder", null);
__decorate([
    (0, common_1.Get)('/getAllFilesOfOrganization/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "getAllFilesOfOrganization", null);
__decorate([
    (0, common_1.Delete)('/deleteFile/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "deleteFile", null);
__decorate([
    (0, common_1.Patch)('/nanoNetApi'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "nanoNetApi", null);
__decorate([
    (0, common_1.Post)('/getAllFilesOfFolderIds'),
    __param(0, (0, common_1.Body)("ids")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "getAllFilesOfFolderIds", null);
__decorate([
    (0, common_1.Get)('/getAllFilesOfApp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FileController.prototype, "getAllFilesOfApp", null);
FileController = __decorate([
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map
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
exports.FolderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FolderService = class FolderService {
    constructor(folderModel) {
        this.folderModel = folderModel;
    }
    async createFolder(req) {
        const newFolder = new this.folderModel(req);
        console.log('new model : ', newFolder);
        return await newFolder.save();
    }
    async getAllProjects(id, isAdmin, parent_folder) {
        console.log('id', id);
        let projects;
        if (isAdmin) {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                projects = await this.folderModel
                    .find({
                    organization: id,
                    project: true,
                    parent_folder: parent_folder,
                })
                    .populate('created_by');
            }
            else {
                throw new common_1.BadRequestException('Invalid organization id');
            }
        }
        else if (!isAdmin) {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                projects = await this.folderModel
                    .find({
                    created_by: id,
                    project: true,
                    parent_folder: parent_folder,
                })
                    .populate('created_by');
            }
            else {
                throw new common_1.BadRequestException('Invalid user id');
            }
        }
        if (projects.length === 0) {
            throw new common_1.NotFoundException('No projects found');
        }
        console.log('projects', projects);
        return projects;
    }
    async getFoldersOfFolder(folderId) {
        console.log('folderId', folderId);
        let folders;
        if (folderId.match(/^[0-9a-fA-F]{24}$/)) {
            folders = await this.folderModel
                .find({
                parent_folder: folderId,
                project: false,
            })
                .populate('created_by');
        }
        else {
            throw new common_1.BadRequestException('Invalid folder id');
        }
        if (folders.length === 0) {
            throw new common_1.NotFoundException('No folders found');
        }
        console.log('folders', folders);
        return folders;
    }
    async getAllFoldersOfApp() {
        let folders = [];
        try {
            const totalFolders = await this.folderModel.find();
            console.log('nameExist', totalFolders);
            return totalFolders;
        }
        catch (error) {
            console.log(error);
            throw [404, error.message];
        }
    }
};
FolderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Folder')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FolderService);
exports.FolderService = FolderService;
//# sourceMappingURL=folder.service.js.map
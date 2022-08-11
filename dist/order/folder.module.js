"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderModule = void 0;
const auth_schema_1 = require("./../auth/auth.schema");
const organization_schema_1 = require("./../organization/organization.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const folder_schema_1 = require("./folder.schema");
const models_schema_1 = require("../models/models.schema");
const folder_controller_1 = require("./folder.controller");
const folder_service_1 = require("./folder.service");
let FolderModule = class FolderModule {
};
FolderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Folder', schema: folder_schema_1.FolderSchema },
                { name: 'Organization', schema: organization_schema_1.OrgSchema },
                { name: 'Auth', schema: auth_schema_1.AuthSchema },
                { name: 'Models', schema: models_schema_1.ModelsSchema },
            ]),
        ],
        controllers: [folder_controller_1.FolderController],
        providers: [folder_service_1.FolderService],
    })
], FolderModule);
exports.FolderModule = FolderModule;
//# sourceMappingURL=folder.module.js.map
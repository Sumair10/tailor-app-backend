"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsModule = void 0;
const auth_schema_1 = require("./../auth/auth.schema");
const organization_schema_1 = require("./../organization/organization.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const models_schema_1 = require("./models.schema");
const models_controller_1 = require("./models.controller");
const models_service_1 = require("./models.service");
let ModelsModule = class ModelsModule {
};
ModelsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Models', schema: models_schema_1.ModelsSchema },
                { name: 'Organization', schema: organization_schema_1.OrgSchema },
                { name: 'Auth', schema: auth_schema_1.AuthSchema },
            ]),
        ],
        controllers: [models_controller_1.ModelsController],
        providers: [models_service_1.ModelsService],
    })
], ModelsModule);
exports.ModelsModule = ModelsModule;
//# sourceMappingURL=models.module.js.map
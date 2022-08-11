"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgModule = void 0;
const organization_schema_1 = require("./organization.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const organization_controller_1 = require("./organization.controller");
const organization_service_1 = require("./organization.service");
let OrgModule = class OrgModule {
};
OrgModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Organization', schema: organization_schema_1.OrgSchema }])],
        controllers: [organization_controller_1.OrgController],
        providers: [organization_service_1.OrgService],
        exports: [organization_service_1.OrgService],
    })
], OrgModule);
exports.OrgModule = OrgModule;
//# sourceMappingURL=organization.module.js.map
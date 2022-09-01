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
exports.OrgController = void 0;
const common_1 = require("@nestjs/common");
const organization_service_1 = require("./organization.service");
let OrgController = class OrgController {
    constructor(orgService) {
        this.orgService = orgService;
    }
    async addOrg(name) {
        const result = await this.orgService.addOrg(name);
        return result;
    }
    async getAllOrganizations() {
        const result = await this.orgService.getAllOrganizations();
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrgController.prototype, "addOrg", null);
__decorate([
    (0, common_1.Get)('/getAllOrganizations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrgController.prototype, "getAllOrganizations", null);
OrgController = __decorate([
    (0, common_1.Controller)('org'),
    __metadata("design:paramtypes", [organization_service_1.OrgService])
], OrgController);
exports.OrgController = OrgController;
//# sourceMappingURL=organization.controller.js.map
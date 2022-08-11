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
exports.OrgService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrgService = class OrgService {
    constructor(orgModel) {
        this.orgModel = orgModel;
    }
    async addOrg(org) {
        console.log('org', org);
        let { name } = org;
        console.log('name', name);
        try {
            const nameExist = await this.orgModel.findOne({ name });
            console.log('nameExist', nameExist);
            if (!nameExist) {
                const newOrg = new this.orgModel({ name });
                const org = await this.orgModel.create(newOrg);
                return { org, status: 'success' };
            }
            else {
                return { status: 'fail', message: 'Organization name already exist' };
            }
        }
        catch (error) {
            console.log(error);
            throw [404, error.message];
        }
    }
    async getAllOrganizations() {
        let organizations = [];
        try {
            const totalOrganizations = await this.orgModel.find();
            console.log('nameExist', totalOrganizations);
            return totalOrganizations;
        }
        catch (error) {
            console.log(error);
            throw [404, error.message];
        }
    }
};
OrgService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Organization')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrgService);
exports.OrgService = OrgService;
//# sourceMappingURL=organization.service.js.map
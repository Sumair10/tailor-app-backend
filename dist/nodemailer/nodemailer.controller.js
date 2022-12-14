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
exports.NodemailerController = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_service_1 = require("./nodemailer.service");
let NodemailerController = class NodemailerController {
    constructor(nodemailerService) {
        this.nodemailerService = nodemailerService;
    }
    async sendMail(obj) {
        try {
            const res = await this.nodemailerService.mailToCustomMail(obj);
            return { responseCode: res[0], result: res[1] };
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NodemailerController.prototype, "sendMail", null);
NodemailerController = __decorate([
    (0, common_1.Controller)('sendMail'),
    __metadata("design:paramtypes", [nodemailer_service_1.NodemailerService])
], NodemailerController);
exports.NodemailerController = NodemailerController;
//# sourceMappingURL=nodemailer.controller.js.map
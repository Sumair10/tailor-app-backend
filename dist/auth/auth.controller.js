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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async getAllUsersOfApp() {
        console.log("inside");
        const result = await this.authService.getAllUsersOfApp();
        return result;
    }
    async getAllUsersByOrgId(orgId) {
        const users = await this.authService.getAllUsersByOrgId(orgId);
        return users;
    }
    async signup(request) {
        console.log('request', request.body);
        try {
            const result = await this.authService.signup(request.body);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async login(email, password) {
        const res = await this.authService.signin(email, password);
        return res;
    }
    async forgetPassword(email) {
        const result = await this.authService.forgetPassword(email.toLowerCase());
        return result;
    }
    async updatePassword(email, password, newPassword) {
        const result = await this.authService.updatePassword(email.toLowerCase(), password, newPassword);
        return result;
    }
    async addUserViaEmail(email, organizationId) {
        try {
            const result = await this.authService.addUserViaEmail(email.toLowerCase(), organizationId);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async resetPassword(email, password) {
        const result = await this.authService.resetPassword(email.toLowerCase(), password);
        return result;
    }
    async editProfile(userId, userData) {
        const result = await this.authService.editProfile(userId, userData);
        return result;
    }
    async getSingleUser(userId) {
        console.log('hello', userId);
        const user = await this.authService.getSingleUser(userId);
        return user;
    }
};
__decorate([
    (0, common_1.Get)('/getAllUsersOfApp'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllUsersOfApp", null);
__decorate([
    (0, common_1.Get)('all/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllUsersByOrgId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('forgetPassword'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)('updatePassword'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Body)('newPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Post)('addUserViaEmail'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "addUserViaEmail", null);
__decorate([
    (0, common_1.Post)('resetPassword'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('newPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Patch)('updateUserData'),
    __param(0, (0, common_1.Body)("id")),
    __param(1, (0, common_1.Body)("userData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "editProfile", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getSingleUser", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
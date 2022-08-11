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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const organization_schema_1 = require("../organization/organization.schema");
const organization_service_1 = require("../organization/organization.service");
let AuthService = class AuthService {
    constructor(authModel, OrgService) {
        this.authModel = authModel;
        this.OrgService = OrgService;
    }
    async getAllUsersByOrgId(orgId) {
        let users;
        if (orgId.match(/^[0-9a-fA-F]{24}$/)) {
            users = await this.authModel.find({ orgId: orgId });
        }
        else {
            throw new common_1.BadRequestException('Invalid ObjectId');
        }
        if (users.length == 0) {
            throw new common_1.BadRequestException('No users found');
        }
        return users;
    }
    async getAllUsersOfApp() {
        console.log("query");
        try {
            const totalUsers = await this.authModel.find();
            console.log('nameExist', totalUsers);
            return totalUsers;
        }
        catch (error) {
            console.log(error);
            throw [404, error.message];
        }
    }
    async getSingleUser(userId) {
        const user = await this.authModel.findById(userId);
        console.log('user', user);
        return user;
    }
    async signup(req) {
        console.log('req', req);
        const user = await this.authModel.findOne(req);
        return user;
    }
    async signin(email, pass) {
        try {
            try {
                const userExist = await (await this.authModel.findOne({ email }));
                if (!userExist) {
                    console.log('not exist');
                    throw new common_1.NotFoundException('User Does not Exist');
                }
                else {
                    const userExist = await (await this.authModel.findOne({ email })).populate('orgId');
                    if (!bcrypt.compareSync(pass, userExist.hash)) {
                        console.log('wrong password');
                        throw new common_1.NotFoundException('Wrong Password');
                    }
                    const token = jwt.sign({ email: userExist.email }, 'secret', {
                        expiresIn: '1h',
                    });
                    const user = {
                        userExist,
                        token,
                    };
                    console.log(user);
                    return user;
                }
            }
            catch (error) {
                console.log('LOGIN ERROR', error);
                if (error.error === 'Not Found') {
                    throw new common_1.NotFoundException(error.error);
                }
                else {
                    throw new common_1.NotFoundException(error.message);
                }
            }
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async forgetPassword(email) {
        let result = await this.authModel.findOne({ email });
    }
    async updatePassword(email, password, newPassword) {
        console.log('params', email, password, newPassword);
        let user = await this.authModel.findOne({ email });
        console.log(user);
        if (user) {
            let passwordMatched = await bcrypt.compareSync(password, user.hash);
            let hashedPassword = await bcrypt.hashSync(newPassword, 8);
            if (passwordMatched) {
                await this.authModel.findOneAndUpdate({ email }, { hash: hashedPassword });
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.OK,
                    msg: 'Password Changed Successfully',
                }, common_1.HttpStatus.OK);
            }
            else {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: 'Incorrect password',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.NotFoundException('user not found');
        }
    }
    async editProfile(userId, userData) {
        let updatedUser;
        let response;
        try {
            updatedUser = await this.authModel.findOne({
                _id: userId,
            });
        }
        catch (err) {
            throw new common_1.NotFoundException('User does not exist');
        }
        console.log('updatedUser', updatedUser);
        const newUser = Object.assign(Object.assign({}, updatedUser._doc), userData);
        if (userData === null || userData === void 0 ? void 0 : userData.password) {
            newUser.hash = await bcrypt.hashSync(userData.password, 8);
        }
        try {
            response = await (await this.authModel.findOneAndUpdate({ _id: userId }, newUser, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            })).populate('orgId');
        }
        catch (err) {
            throw new common_1.NotFoundException('User not Found');
        }
        console.log('response', response);
        const user = {
            userExist: response,
        };
        console.log('user', user);
        return user;
    }
    async addUserViaEmail(email, orgId) {
        let result;
        return { message: 'Registeration link sent to your email' };
    }
    async resetPassword(email, pass) {
        console.log('email', email, pass);
        const userExist = await this.authModel.findOne({ email }).exec();
        console.log('userExist', userExist);
        if (!userExist) {
            console.log('not exist');
            throw new common_1.NotFoundException('User Does not Exist');
        }
        if (userExist) {
            let hashedPassword = await bcrypt.hashSync(pass, 8);
            await this.authModel.findOneAndUpdate({ email }, { hash: hashedPassword });
            throw new common_1.HttpException({
                status: common_1.HttpStatus.OK,
                msg: 'Password Changed Successfully',
            }, common_1.HttpStatus.OK);
        }
        else {
            throw new common_1.NotFoundException('user not found');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Auth')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        organization_service_1.OrgService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
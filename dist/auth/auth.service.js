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
const shop_service_1 = require("../shop/shop.service");
const shop_schema_1 = require("../shop/shop.schema");
let AuthService = class AuthService {
    constructor(authModel, shopModel, ShopService) {
        this.authModel = authModel;
        this.shopModel = shopModel;
        this.ShopService = ShopService;
    }
    async signup(req) {
        let newShop;
        console.log('req', req);
        if (req.shopName) {
            let Shop = {
                name: req.shopName,
            };
            newShop = await this.ShopService.addShop(Shop);
            console.log('newShop', newShop);
            if (newShop.status == 'fail') {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: 'Organization name already exist',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        const user = new this.authModel(Object.assign(Object.assign({}, req), { shopId: newShop.shop._id }));
        return await user.save();
    }
    async signin(email, pass) {
        try {
            const userExist = await (await this.authModel.findOne({ email }));
            const shop = await (await this.shopModel.find({ _id: userExist.shopId }));
            console.log('userExist', userExist);
            return userExist.populate('shopId');
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
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
            })).populate('shopId');
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Auth')),
    __param(1, (0, mongoose_1.InjectModel)('Shop')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        shop_service_1.ShopService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
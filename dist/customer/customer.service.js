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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shop_schema_1 = require("../shop/shop.schema");
let CustomerService = class CustomerService {
    constructor(customerModel, shopModel) {
        this.customerModel = customerModel;
        this.shopModel = shopModel;
    }
    async createCustomer(req) {
        let shop;
        shop = await this.shopModel.findOne({ name: req.shop });
        console.log('new', shop);
        const newCustomer = new this.customerModel(Object.assign(Object.assign({}, req), { shop: shop }));
        console.log('new model : ', newCustomer);
        return await newCustomer.save();
    }
    async getCustomer(customerId) {
        let customer;
        if (customerId.match(/^[0-9a-fA-F]{24}$/)) {
            customer = await this.customerModel
                .find({ _id: customerId })
                .populate('shop');
        }
        else {
            throw new common_1.BadRequestException('Invalid customer id');
        }
        return customer;
    }
    async updateCustomer(customerId, customerData) {
        let updatedCustomer;
        let response;
        try {
            updatedCustomer = await this.customerModel.findOne({
                _id: customerId,
            });
        }
        catch (err) {
            throw new common_1.NotFoundException('User does not exist');
        }
        console.log('updatedCustomer', updatedCustomer);
        const newCustomer = Object.assign(Object.assign({}, updatedCustomer._doc), customerData);
        try {
            response = await (await this.customerModel.findOneAndUpdate({ _id: customerId }, newCustomer, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            })).populate('shop');
        }
        catch (err) {
            throw new common_1.NotFoundException('customer not Found');
        }
        console.log('response', response);
        return response;
    }
    async deleteCustomer(customerId) {
        let customer;
        try {
            customer = await this.customerModel.findById(customerId).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('customer not found');
        }
        if (customer) {
            await this.customerModel.findByIdAndDelete(customerId);
            return 'customer deleted successfully';
        }
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Customer')),
    __param(1, (0, mongoose_1.InjectModel)('Shop')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map
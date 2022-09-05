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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const measurement_schema_1 = require("../measurement/measurement.schema");
const shop_schema_1 = require("../shop/shop.schema");
let ServicesService = class ServicesService {
    constructor(servicesModel, measurementModel, shopModel) {
        this.servicesModel = servicesModel;
        this.measurementModel = measurementModel;
        this.shopModel = shopModel;
    }
    async createServices(req) {
        console.log('create services', req);
        let measurement;
        measurement = await this.measurementModel.findOne({ name: req.measurement_fields });
        let shop;
        shop = await this.shopModel.findOne({ name: req.shop });
        console.log('new', measurement);
        const newServices = new this.servicesModel(Object.assign(Object.assign({}, req), { measurement_fields: measurement, shop: shop }));
        console.log('new model : ', newServices);
        return await newServices.save();
    }
    async getServices(servicesId) {
        let services;
        if (servicesId.match(/^[0-9a-fA-F]{24}$/)) {
            services = await this.servicesModel
                .find({ _id: servicesId })
                .populate('measurement');
        }
        else {
            throw new common_1.BadRequestException('Invalid services id');
        }
        return services;
    }
    async updateServices(servicesId, servicesData) {
        let updatedServices;
        let response;
        try {
            updatedServices = await this.servicesModel.findOne({
                _id: servicesId,
            });
        }
        catch (err) {
            throw new common_1.NotFoundException('User does not exist');
        }
        console.log('updatedServices', updatedServices);
        const newServices = Object.assign(Object.assign({}, updatedServices._doc), servicesData);
        try {
            response = await (await this.servicesModel.findOneAndUpdate({ _id: servicesId }, newServices, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            })).populate('measurement');
        }
        catch (err) {
            throw new common_1.NotFoundException('services not Found');
        }
        console.log('response', response);
        return response;
    }
    async deleteServices(servicesId) {
        let services;
        try {
            services = await this.servicesModel.findById(servicesId).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('services not found');
        }
        if (services) {
            await this.servicesModel.findByIdAndDelete(servicesId);
            return 'services deleted successfully';
        }
    }
    async getAllServicesOfShop(shopId) {
        let shopServices;
        if (shopId.match(/^[0-9a-fA-F]{24}$/)) {
            shopServices = await this.servicesModel
                .find({ shop: shopId })
                .populate('shop')
                .populate('measurement_fields');
        }
        else {
            throw new common_1.BadRequestException('Invalid measurement id');
        }
        return shopServices;
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Services')),
    __param(1, (0, mongoose_1.InjectModel)('Measurement')),
    __param(2, (0, mongoose_1.InjectModel)('Shop')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map
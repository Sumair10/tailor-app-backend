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
exports.MeasurementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shop_service_1 = require("../shop/shop.service");
const customer_service_1 = require("../customer/customer.service");
const shop_schema_1 = require("../shop/shop.schema");
const customer_schema_1 = require("../customer/customer.schema");
let MeasurementService = class MeasurementService {
    constructor(measurementModel, customerModel, shopModel) {
        this.measurementModel = measurementModel;
        this.customerModel = customerModel;
        this.shopModel = shopModel;
    }
    async createMeasurement(req) {
        let customer;
        let shop;
        console.log('new', req);
        customer = await this.customerModel.findOne({ customer_email: req.customer });
        console.log('new', customer);
        shop = await this.shopModel.findOne({ name: req.shop });
        console.log('new', shop);
        const newMeasurement = new this.measurementModel(Object.assign(Object.assign({}, req), { customer: customer._id, shop: shop._id }));
        console.log('new model : ', newMeasurement);
        return await newMeasurement.save();
    }
    async getMeasurement(measurementId) {
        let measurement;
        if (measurementId.match(/^[0-9a-fA-F]{24}$/)) {
            measurement = await this.measurementModel
                .find({ _id: measurementId })
                .populate('shop')
                .populate('customer');
        }
        else {
            throw new common_1.BadRequestException('Invalid measurement id');
        }
        return measurement;
    }
    async updateMeasurement(measurementId, measurementData) {
        let updatedMeasurement;
        let response;
        try {
            updatedMeasurement = await this.measurementModel.findOne({
                _id: measurementId,
            });
        }
        catch (err) {
            throw new common_1.NotFoundException('User does not exist');
        }
        console.log('updatedMeasurement', updatedMeasurement);
        const newMeasurement = Object.assign(Object.assign({}, updatedMeasurement._doc), measurementData);
        try {
            response = await (await this.measurementModel.findOneAndUpdate({ _id: measurementId }, newMeasurement, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            })).populate('shop');
        }
        catch (err) {
            throw new common_1.NotFoundException('measurement not Found');
        }
        console.log('response', response);
        return response;
    }
    async deleteMeasurement(measurementId) {
        let measurement;
        try {
            measurement = await this.measurementModel.findById(measurementId).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('File not found');
        }
        if (measurement) {
            await this.measurementModel.findByIdAndDelete(measurementId);
            return 'Measurement deleted successfully';
        }
    }
};
MeasurementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Measurement')),
    __param(1, (0, mongoose_1.InjectModel)('Customer')),
    __param(2, (0, mongoose_1.InjectModel)('Shop')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MeasurementService);
exports.MeasurementService = MeasurementService;
//# sourceMappingURL=measurement.service.js.map
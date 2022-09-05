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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const customer_service_1 = require("../customer/customer.service");
const employee_service_1 = require("../employee/employee.service");
const customer_module_1 = require("../customer/customer.module");
const customer_schema_1 = require("../customer/customer.schema");
const employee_schema_1 = require("../employee/employee.schema");
const shop_schema_1 = require("../shop/shop.schema");
let OrderService = class OrderService {
    constructor(orderModel, customerModel, employeeModel, shopModel) {
        this.orderModel = orderModel;
        this.customerModel = customerModel;
        this.employeeModel = employeeModel;
        this.shopModel = shopModel;
    }
    async createOrder(req) {
        let customer;
        let employee;
        let shop;
        console.log('new', req);
        customer = await this.customerModel.findOne({ customer_email: req.customer_email });
        console.log('new', customer);
        employee = await this.employeeModel.findOne({ email: req.assign_to });
        console.log('new', employee);
        shop = await this.shopModel.findOne({ name: req.shop });
        console.log('new', shop);
        const newOrder = new this.orderModel(Object.assign(Object.assign({}, req), { customer: customer._id, assign_to: employee._id, shop: shop }));
        console.log('new model : ', newOrder);
        return await newOrder.save();
    }
    async getOrder(orderId) {
        let order;
        if (orderId.match(/^[0-9a-fA-F]{24}$/)) {
            order = await this.orderModel
                .find({ _id: orderId })
                .populate('customer')
                .populate('assign_to')
                .populate('shop');
        }
        else {
            throw new common_1.BadRequestException('Invalid order id');
        }
        return order;
    }
    async updateOrder(orderId, orderData) {
        let updatedOrder;
        let response;
        try {
            updatedOrder = await this.orderModel.findOne({
                _id: orderId,
            });
        }
        catch (err) {
            throw new common_1.NotFoundException('User does not exist');
        }
        console.log('updatedOrder', updatedOrder);
        const newOrder = Object.assign(Object.assign({}, updatedOrder._doc), orderData);
        try {
            response = await (await this.orderModel.findOneAndUpdate({ _id: orderId }, newOrder, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            }).populate('customer').populate('assign_to'));
        }
        catch (err) {
            throw new common_1.NotFoundException('order not Found');
        }
        console.log('response', response);
        return response;
    }
    async deleteOrder(orderId) {
        let order;
        try {
            order = await this.orderModel.findById(orderId).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('employee not found');
        }
        if (order) {
            await this.orderModel.findByIdAndDelete(orderId);
            return 'order deleted successfully';
        }
    }
    async getAllOrdersOfShop(shopId) {
        let shopOrders;
        if (shopId.match(/^[0-9a-fA-F]{24}$/)) {
            shopOrders = await this.orderModel
                .find({ shop: shopId })
                .populate('customer')
                .populate('assign_to')
                .populate('shop');
        }
        else {
            throw new common_1.BadRequestException('Invalid measurement id');
        }
        return shopOrders;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Order')),
    __param(1, (0, mongoose_1.InjectModel)('Customer')),
    __param(2, (0, mongoose_1.InjectModel)('Employee')),
    __param(3, (0, mongoose_1.InjectModel)('Shop')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map
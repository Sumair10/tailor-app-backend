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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shop_schema_1 = require("../shop/shop.schema");
let EmployeeService = class EmployeeService {
    constructor(employeeModel, shopModel) {
        this.employeeModel = employeeModel;
        this.shopModel = shopModel;
    }
    async createEmployee(req) {
        let shop;
        shop = await this.shopModel.findOne({ name: req.shop });
        console.log('new', shop);
        const newEmployee = new this.employeeModel(Object.assign(Object.assign({}, req), { shop: shop }));
        console.log('new model : ', newEmployee);
        return await newEmployee.save();
    }
    async getEmployee(employeeId) {
        let employee;
        if (employeeId.match(/^[0-9a-fA-F]{24}$/)) {
            employee = await this.employeeModel
                .find({ _id: employeeId })
                .populate('shop');
        }
        else {
            throw new common_1.BadRequestException('Invalid employee id');
        }
        return employee;
    }
    async updateEmployee(employeeId, employeeData) {
        let updatedEmployee;
        let response;
        try {
            updatedEmployee = await this.employeeModel.findOne({
                _id: employeeId,
            });
        }
        catch (err) {
            throw new common_1.NotFoundException('User does not exist');
        }
        console.log('updatedEmployee', updatedEmployee);
        const newEmployee = Object.assign(Object.assign({}, updatedEmployee._doc), employeeData);
        try {
            response = await (await this.employeeModel.findOneAndUpdate({ _id: employeeId }, newEmployee, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            })).populate('shop');
        }
        catch (err) {
            throw new common_1.NotFoundException('employee not Found');
        }
        console.log('response', response);
        return response;
    }
    async deleteEmployee(employeeId) {
        let employee;
        try {
            employee = await this.employeeModel.findById(employeeId).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('employee not found');
        }
        if (employee) {
            await this.employeeModel.findByIdAndDelete(employeeId);
            return 'Employee deleted successfully';
        }
    }
    async getAllEmployeesOfShop(shopId) {
        let shopEmployee;
        if (shopId.match(/^[0-9a-fA-F]{24}$/)) {
            shopEmployee = await this.employeeModel
                .find({ shop: shopId })
                .populate('shop');
        }
        else {
            throw new common_1.BadRequestException('Invalid measurement id');
        }
        return shopEmployee;
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Employee')),
    __param(1, (0, mongoose_1.InjectModel)('Shop')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map
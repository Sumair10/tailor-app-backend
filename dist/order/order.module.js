"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const order_schema_1 = require("./order.schema");
const employee_schema_1 = require("../employee/employee.schema");
const customer_module_1 = require("../customer/customer.module");
const employee_module_1 = require("../employee/employee.module");
const customer_service_1 = require("../customer/customer.service");
const employee_service_1 = require("../employee/employee.service");
const customer_schema_1 = require("../customer/customer.schema");
const shop_schema_1 = require("../shop/shop.schema");
const shop_module_1 = require("../shop/shop.module");
const services_schema_1 = require("../services/services.schema");
const services_module_1 = require("../services/services.module");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            employee_module_1.EmployeeModule,
            customer_module_1.CustomerModule,
            shop_module_1.ShopModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Order', schema: order_schema_1.OrderSchema },
                {
                    name: 'Customer',
                    schema: customer_schema_1.CustomerSchema,
                },
                {
                    name: 'Employee',
                    schema: employee_schema_1.EmployeeSchema,
                },
                {
                    name: 'Shop',
                    schema: shop_schema_1.ShopSchema,
                },
                {
                    name: 'Services',
                    schema: services_schema_1.ServicesSchema,
                },
            ]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map
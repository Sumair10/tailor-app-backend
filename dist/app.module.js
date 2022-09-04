"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const nodemailer_module_1 = require("./nodemailer/nodemailer.module");
const order_module_1 = require("./order/order.module");
const customer_module_1 = require("./customer/customer.module");
const measurement_module_1 = require("./measurement/measurement.module");
const employee_module_1 = require("./employee/employee.module");
const shop_module_1 = require("./shop/shop.module");
const services_module_1 = require("./services/services.module");
require('dotenv').config({ path: './.env' });
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            order_module_1.OrderModule,
            customer_module_1.CustomerModule,
            measurement_module_1.MeasurementModule,
            employee_module_1.EmployeeModule,
            auth_module_1.AuthModule,
            shop_module_1.ShopModule,
            services_module_1.ServicesModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI, {
                useNewUrlParser: true,
            }),
            nodemailer_module_1.NodemailerModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
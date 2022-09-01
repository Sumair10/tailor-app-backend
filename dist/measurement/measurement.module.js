"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const measurement_service_1 = require("./measurement.service");
const measurement_controller_1 = require("./measurement.controller");
const measurement_schema_1 = require("./measurement.schema");
const customer_schema_1 = require("../customer/customer.schema");
const shop_schema_1 = require("../shop/shop.schema");
const shop_module_1 = require("../shop/shop.module");
const customer_module_1 = require("../customer/customer.module");
const shop_service_1 = require("../shop/shop.service");
const customer_service_1 = require("../customer/customer.service");
let MeasurementModule = class MeasurementModule {
};
MeasurementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            customer_module_1.CustomerModule,
            shop_module_1.ShopModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Measurement', schema: measurement_schema_1.MeasurementSchema },
                {
                    name: 'Shop',
                    schema: shop_schema_1.ShopSchema,
                },
                {
                    name: 'Customer',
                    schema: customer_schema_1.CustomerSchema,
                },
            ]),
        ],
        controllers: [measurement_controller_1.MeasurementController],
        providers: [measurement_service_1.MeasurementService, shop_service_1.ShopService, customer_service_1.CustomerService],
    })
], MeasurementModule);
exports.MeasurementModule = MeasurementModule;
//# sourceMappingURL=measurement.module.js.map
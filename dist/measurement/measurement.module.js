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
const shop_module_1 = require("../shop/shop.module");
const shop_schema_1 = require("../shop/shop.schema");
const services_module_1 = require("../services/services.module");
const services_schema_1 = require("../services/services.schema");
let MeasurementModule = class MeasurementModule {
};
MeasurementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shop_module_1.ShopModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Measurement', schema: measurement_schema_1.MeasurementSchema },
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
        controllers: [measurement_controller_1.MeasurementController],
        providers: [measurement_service_1.MeasurementService],
    })
], MeasurementModule);
exports.MeasurementModule = MeasurementModule;
//# sourceMappingURL=measurement.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const services_service_1 = require("./services.service");
const services_controller_1 = require("./services.controller");
const services_schema_1 = require("./services.schema");
const measurement_service_1 = require("../measurement/measurement.service");
const measurement_schema_1 = require("../measurement/measurement.schema");
const shop_service_1 = require("../shop/shop.service");
const shop_schema_1 = require("../shop/shop.schema");
const measurement_module_1 = require("../measurement/measurement.module");
const shop_module_1 = require("../shop/shop.module");
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Services', schema: services_schema_1.ServicesSchema },
                {
                    name: 'Measurement',
                    schema: measurement_schema_1.MeasurementSchema,
                },
                {
                    name: 'Shop',
                    schema: shop_schema_1.ShopSchema,
                },
            ]),
        ],
        controllers: [services_controller_1.ServicesController],
        providers: [services_service_1.ServicesService, measurement_service_1.MeasurementService, shop_service_1.ShopService],
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map
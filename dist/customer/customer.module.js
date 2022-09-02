"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_controller_1 = require("./customer.controller");
const customer_schema_1 = require("./customer.schema");
const shop_module_1 = require("../shop/shop.module");
const shop_service_1 = require("../shop/shop.service");
const shop_schema_1 = require("../shop/shop.schema");
let CustomerModule = class CustomerModule {
};
CustomerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shop_module_1.ShopModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Customer', schema: customer_schema_1.CustomerSchema },
                {
                    name: 'Shop',
                    schema: shop_schema_1.ShopSchema,
                },
            ]),
        ],
        controllers: [customer_controller_1.CustomerController],
        providers: [customer_service_1.CustomerService, shop_service_1.ShopService],
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map
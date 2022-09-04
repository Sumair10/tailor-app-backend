"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ServicesSchema = new mongoose.Schema({
    name: { type: String },
    code: { type: String },
    price: { type: String },
    description: { type: String },
    isActive: { type: Boolean },
    measurement_fields: { type: Schema.Types.ObjectId, ref: 'Measurement', required: true },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
});
//# sourceMappingURL=services.schema.js.map
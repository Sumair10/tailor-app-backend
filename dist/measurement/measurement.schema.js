"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.MeasurementSchema = new mongoose.Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    code: { type: String },
    active: { type: String },
    price: { type: String },
    description: { type: String },
    measurements: [{
            measurement_name: { type: String },
            type: { type: String },
            description: { type: String }
        }]
});
//# sourceMappingURL=measurement.schema.js.map
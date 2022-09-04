"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.MeasurementSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    type: { type: String },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
});
//# sourceMappingURL=measurement.schema.js.map
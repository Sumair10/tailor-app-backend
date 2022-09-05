"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.OrderSchema = new mongoose.Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    assignTo: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    services: { type: Schema.Types.ObjectId, ref: 'Services', required: true },
    deliveryDate: { type: Date },
    status: { type: String },
    reference: { type: String },
    priority: { type: String },
    taxes: { type: String },
    discount: { type: String },
    comments: { type: String },
    date: { type: Date },
});
//# sourceMappingURL=order.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.OrderSchema = new mongoose.Schema({
    customer_name: { type: String, required: true },
    delivery_date: { type: Date },
    order_status: { type: String },
    reference: { type: String },
    assign_to: { type: String },
    priority: { type: String },
    services: { type: String },
    taxes: { type: String },
    discount: { type: String },
    comments: { type: String },
});
//# sourceMappingURL=order.schema.js.map
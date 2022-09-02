"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.CustomerSchema = new mongoose.Schema({
    customer_email: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    birth_date: { type: String },
    opening_balance: { type: String },
    address: { type: String },
    description: { type: String },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
});
//# sourceMappingURL=customer.schema.js.map
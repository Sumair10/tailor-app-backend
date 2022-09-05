"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    dateOfBirth: { type: String },
    salary: { type: String },
    address: { type: String },
    password: { type: String },
    description: { type: String },
    picture: { type: String },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
});
//# sourceMappingURL=employee.schema.js.map
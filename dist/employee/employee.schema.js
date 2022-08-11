"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.EmployeeSchema = new mongoose.Schema({
    employee_name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    birth_date: { type: String },
    salary: { type: String },
    address: { type: String },
    password: { type: String },
    description: { type: String },
    picture: { type: String },
});
//# sourceMappingURL=employee.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AuthSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
//# sourceMappingURL=auth.schema.js.map
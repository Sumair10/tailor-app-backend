"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.OrgSchema = new mongoose.Schema({
    name: { type: String, required: true },
});
//# sourceMappingURL=organization.schema.js.map
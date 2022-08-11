"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AuthSchema = new mongoose.Schema({
    email: { type: String, required: true },
    hash: { type: String, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    admin: { type: Boolean, required: false },
    orgId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
});
//# sourceMappingURL=auth.schema.js.map
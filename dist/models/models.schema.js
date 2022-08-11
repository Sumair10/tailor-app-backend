"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ModelsSchema = new mongoose.Schema({
    model_name: { type: String },
    model: { type: Boolean },
    model_id: { type: String },
});
//# sourceMappingURL=models.schema.js.map
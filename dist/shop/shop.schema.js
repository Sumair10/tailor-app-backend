"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ShopSchema = new mongoose.Schema({
    name: { type: String, required: true },
});
//# sourceMappingURL=shop.schema.js.map
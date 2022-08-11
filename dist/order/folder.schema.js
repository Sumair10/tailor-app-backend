"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.FolderSchema = new mongoose.Schema({
    name: { type: String, required: true },
});
//# sourceMappingURL=folder.schema.js.map
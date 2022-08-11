"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.FolderSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false },
    project: { type: Boolean, default: false, required: true },
    organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
    parent_folder: { type: Schema.Types.ObjectId, ref: 'Folder', required: false },
    shared_to: [{ type: Schema.Types.ObjectId, ref: 'Auth', required: false }],
    access: { type: String, enum: ['private', 'public'], default: 'private', required: true },
    created_by: { type: Schema.Types.ObjectId, ref: 'Auth', required: true },
    created_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=model.schema.js.map
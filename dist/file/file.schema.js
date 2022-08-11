"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.FileSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false },
    file_url: { type: String, required: true },
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    parent_folder: {
        type: Schema.Types.ObjectId,
        ref: 'Folder',
        required: false,
    },
    shared_to: [{ type: Schema.Types.ObjectId, ref: 'Auth', required: false }],
    access: {
        type: String,
        enum: ['private', 'public'],
        default: 'private',
        required: true,
    },
    uploaded_by: { type: Schema.Types.ObjectId, ref: 'Auth', required: true },
    uploaded_at: { type: Date, default: Date.now },
    model_id_type: { type: String, required: true },
    model_id_name: { type: String, required: true },
    processed_data: { type: Schema.Types.Mixed },
    nanoNet_url: { type: String },
    rule_success: { type: Boolean },
    request_file_id: { type: String },
    in_process: { type: Boolean },
});
//# sourceMappingURL=file.schema.js.map
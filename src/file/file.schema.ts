import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const FileSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false},
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
  shared_to: [{ type: Schema.Types.ObjectId, ref: 'Auth', required: false }], // users that have access to this folder
  access: {
    type: String,
    enum: ['private', 'public'],
    default: 'private',
    required: true,
  },
  uploaded_by: { type: Schema.Types.ObjectId, ref: 'Auth', required: true },
  uploaded_at: { type: Date, default: Date.now },
  model_id_type: { type: String, required: true},
  model_id_name: { type: String, required: true},
  processed_data : {type: Schema.Types.Mixed},
  nanoNet_url : {type: String},
  rule_success : {type :Boolean},
  request_file_id : {type: String},
  in_process :  {type :Boolean},
});
export interface File {
  name: string;
  file_url: string;
  organization: string;
  parent_folder: string;
  shared_to: string[];
  access: string;
  uploaded_by: string;
  uploaded_at: Date;
  model_id_type : string;
  model_id_name : string;
  processed_data : any;
  nanoNet_url : string,
  request_file_id : string,
  in_process : boolean;
}
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const OrgSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export interface Org {
  name: string;
}

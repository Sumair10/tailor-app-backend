import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AuthSchema = new mongoose.Schema({
  // email: { type: String, required: true, unique: true },
  email: { type: String, required: true},
  hash: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  admin: { type: Boolean, required: false },
  orgId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
});

export interface Auth {
  email: string;
  hash: string;
  firstName: string;
  lastName: string;
  admin: boolean;
  orgId: string;
}

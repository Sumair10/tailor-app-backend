import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AuthSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true },
  shopId: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
});

export interface Auth {
  name: string;
  email: string;
  password: string;
  shopId: string;
}

import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const CustomerSchema = new mongoose.Schema({
  customer_name: { type: String, required: true},
  phone: { type: String},
  email: { type: String},
  birth_date : { type: String},
  opening_balance : { type: String},
  address : { type: String},
  description : { type: String},
});

export interface Customer {
  customer_name: string;
  phone : string;
  email : string;
  birth_date : string;
  opening_balance : string;
  address : string;
  description : string;
}

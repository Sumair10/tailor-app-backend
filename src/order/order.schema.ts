import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const OrderSchema = new mongoose.Schema({
  customer_name: { type: String, required: true},
  delivery_date: { type: Date },
  order_status : { type: String},
  reference : { type: String},
  assign_to : { type: String},
  priority : { type: String},
  services : { type: String},
  taxes : { type: String},
  discount : { type: String},
  comments : { type: String},
});

export interface Order {
  customer_name: string;
  delivery_date:Date;
  reference : string,
  assign : string,
  priority : string,
  services : string,
  taxes : string,
  discount : string,
  comments : string,

}

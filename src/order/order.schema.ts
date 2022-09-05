import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const OrderSchema = new mongoose.Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer',required: true },
  assign_to: { type: Schema.Types.ObjectId, ref: 'Employee',required: true },
  shop: { type: Schema.Types.ObjectId, ref: 'Shop',required: true },

  delivery_date: { type: Date },
  order_status : { type: String},
  reference : { type: String},
  priority : { type: String},
  services : { type: String},
  taxes : { type: String},
  discount : { type: String},
  comments : { type: String},
});

export interface Order {
  customer: string;
  assignTo : string,
  deliveryDate:Date;
  reference : string,
  priority : string,
  services : string,
  taxes : string,
  discount : string,
  comments : string,
  shop : string,

}

import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const MeasurementSchema = new mongoose.Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer',required: true },
  shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
  code: { type: String},
  active: { type: String},
  price : { type: String},
  description : { type: String},
  measurements: [{
    measurement_name: { type: String},
    type: { type: String},
    description: { type: String}
  }]
});

export interface Measurement {
  customer: string;
  shop: string;
  code : string;
  active : string;
  price_date : string;
  measurements: [{
    measurement_name: string;
    type: string;
    description: string;
  }]
  
}

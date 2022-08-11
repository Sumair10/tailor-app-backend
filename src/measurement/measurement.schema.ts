import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const MeasurementSchema = new mongoose.Schema({
  customer_name: { type: String, required: true},
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
  customer_name: string;
  code : string;
  active : string;
  price_date : string;
  measurements: [{
    measurement_name: string;
    type: string;
    description: string;
  }]
  
}

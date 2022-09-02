import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const EmployeeSchema = new mongoose.Schema({
  employee_name: { type: String, required: true},
  email: { type: String },
  phone : { type: String},
  birth_date : { type: String},
  salary : { type: String},
  address : { type: String},
  password : { type: String},
  description : { type: String},
  picture : { type: String},
  shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },

});

export interface Employee {
  employee_name: string;
  email:string;
  phone : string,
  birth_date : string,
  salary : string,
  address : string,
  password : string,
  description : string,
  picture : string,
  shop : string,

}

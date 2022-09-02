import * as mongoose from 'mongoose';
export declare const EmployeeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    employee_name: string;
    shop: mongoose.Schema.Types.ObjectId;
    email?: string;
    phone?: string;
    birth_date?: string;
    salary?: string;
    address?: string;
    password?: string;
    description?: string;
    picture?: string;
}>;
export interface Employee {
    employee_name: string;
    email: string;
    phone: string;
    birth_date: string;
    salary: string;
    address: string;
    password: string;
    description: string;
    picture: string;
    shop: string;
}

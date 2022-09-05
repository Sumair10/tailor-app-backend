import * as mongoose from 'mongoose';
export declare const EmployeeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    name: string;
    shop: mongoose.Schema.Types.ObjectId;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    salary?: string;
    address?: string;
    password?: string;
    description?: string;
    picture?: string;
}>;
export interface Employee {
    name: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    salary: string;
    address: string;
    password: string;
    description: string;
    picture: string;
    shop: string;
}

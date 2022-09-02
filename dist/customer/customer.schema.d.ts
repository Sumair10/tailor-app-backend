import * as mongoose from 'mongoose';
export declare const CustomerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    customer_email: string;
    shop: mongoose.Schema.Types.ObjectId;
    phone?: string;
    email?: string;
    birth_date?: string;
    opening_balance?: string;
    address?: string;
    description?: string;
}>;
export interface Customer {
    customer_email: string;
    phone: string;
    email: string;
    birth_date: string;
    opening_balance: string;
    address: string;
    description: string;
    shop: string;
}

import * as mongoose from 'mongoose';
export declare const CustomerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    shop: mongoose.Schema.Types.ObjectId;
    name?: string;
    phone?: string;
    email?: string;
    dateOfBirth?: string;
    openingBalance?: string;
    address?: string;
    description?: string;
}>;
export interface Customer {
    phone: string;
    name: string;
    email: string;
    dateOfBirth: string;
    openingBalance: string;
    address: string;
    description: string;
    shop: string;
}

import * as mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    customer: mongoose.Schema.Types.ObjectId;
    assignTo: mongoose.Schema.Types.ObjectId;
    shop: mongoose.Schema.Types.ObjectId;
    services: mongoose.Schema.Types.ObjectId;
    date?: Date;
    deliveryDate?: Date;
    status?: string;
    reference?: string;
    priority?: string;
    taxes?: string;
    discount?: string;
    comments?: string;
}>;
export interface Order {
    customer: string;
    assignTo: string;
    deliveryDate: Date;
    reference: string;
    priority: string;
    services: string;
    taxes: string;
    discount: string;
    comments: string;
    shop: string;
}

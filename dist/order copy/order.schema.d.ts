import * as mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    customer_name: string;
    delivery_date?: Date;
    order_status?: string;
    reference?: string;
    assign_to?: string;
    priority?: string;
    services?: string;
    taxes?: string;
    discount?: string;
    comments?: string;
}>;
export interface Order {
    customer_name: string;
    delivery_date: Date;
    reference: string;
    assign: string;
    priority: string;
    services: string;
    taxes: string;
    discount: string;
    comments: string;
}

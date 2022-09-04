import * as mongoose from 'mongoose';
export declare const ServicesSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    measurement_fields: mongoose.Schema.Types.ObjectId;
    shop: mongoose.Schema.Types.ObjectId;
    name?: string;
    code?: string;
    price?: string;
    description?: string;
    isActive?: boolean;
}>;
export interface Services {
    name: string;
    code: string;
    price: string;
    description: string;
    isActive: boolean;
    measurement_fields: string;
    shop: string;
}

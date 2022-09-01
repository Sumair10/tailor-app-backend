import * as mongoose from 'mongoose';
export declare const MeasurementSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    customer: mongoose.Schema.Types.ObjectId;
    shop: mongoose.Schema.Types.ObjectId;
    code?: string;
    active?: string;
    price?: string;
    description?: string;
    measurements?: unknown[];
}>;
export interface Measurement {
    customer: string;
    shop: string;
    code: string;
    active: string;
    price_date: string;
    measurements: [
        {
            measurement_name: string;
            type: string;
            description: string;
        }
    ];
}

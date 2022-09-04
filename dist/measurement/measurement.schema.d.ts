import * as mongoose from 'mongoose';
export declare const MeasurementSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    shop: mongoose.Schema.Types.ObjectId;
    type?: string;
    name?: string;
    description?: string;
}>;
export interface Measurement {
    name: string;
    description: string;
    type: string;
    shop: string;
}

import * as mongoose from 'mongoose';
export declare const ModelsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    model_id?: string;
    model_name?: string;
    model?: boolean;
}>;
export interface Models {
    model_name: string;
    model: boolean;
    model_id: string;
}

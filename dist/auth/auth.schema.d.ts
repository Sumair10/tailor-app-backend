import * as mongoose from 'mongoose';
export declare const AuthSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    name: string;
    email: string;
    password: string;
    shopId: mongoose.Schema.Types.ObjectId;
}>;
export interface Auth {
    name: string;
    email: string;
    password: string;
    shopId: string;
}

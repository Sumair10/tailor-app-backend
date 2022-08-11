import * as mongoose from 'mongoose';
export declare const AuthSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    email: string;
    orgId: mongoose.Schema.Types.ObjectId;
    hash?: string;
    firstName?: string;
    lastName?: string;
    admin?: boolean;
}>;
export interface Auth {
    email: string;
    hash: string;
    firstName: string;
    lastName: string;
    admin: boolean;
    orgId: string;
}

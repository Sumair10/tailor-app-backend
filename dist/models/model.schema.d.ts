import * as mongoose from 'mongoose';
export declare const FolderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    name: string;
    project: boolean;
    organization: mongoose.Schema.Types.ObjectId;
    access: "private" | "public";
    created_by: mongoose.Schema.Types.ObjectId;
    parent_folder?: mongoose.Schema.Types.ObjectId;
    shared_to?: unknown[];
    created_at?: Date;
}>;
export interface Folder {
    name: string;
    project: boolean;
    organization: string;
    parent_folder: string;
    shared_to: string[];
    access: string;
    created_by: string;
    created_at: Date;
}

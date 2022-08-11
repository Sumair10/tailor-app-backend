import * as mongoose from 'mongoose';
export declare const FileSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    name: string;
    file_url: string;
    organization: mongoose.Schema.Types.ObjectId;
    access: "private" | "public";
    uploaded_by: mongoose.Schema.Types.ObjectId;
    model_id_type: string;
    model_id_name: string;
    parent_folder?: mongoose.Schema.Types.ObjectId;
    shared_to?: unknown[];
    uploaded_at?: Date;
    processed_data?: any;
    nanoNet_url?: string;
    rule_success?: boolean;
    request_file_id?: string;
    in_process?: boolean;
}>;
export interface File {
    name: string;
    file_url: string;
    organization: string;
    parent_folder: string;
    shared_to: string[];
    access: string;
    uploaded_by: string;
    uploaded_at: Date;
    model_id_type: string;
    model_id_name: string;
    processed_data: any;
    nanoNet_url: string;
    request_file_id: string;
    in_process: boolean;
}

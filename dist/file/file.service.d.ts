/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { File } from './file.schema';
export declare class FileService {
    private readonly fileModel;
    constructor(fileModel: Model<File>);
    findOneAndUpdateFile(id: string, data: any): Promise<any>;
    getNanonetsData(data: any): Promise<any>;
    addFile(file: File): Promise<File>;
    getAllFiles(parent_folder_id: string): Promise<File[]>;
    getAllFilesOfOrganization(organization: string): Promise<File[]>;
    deleteFile(fileId: string): Promise<any>;
    nanoNetApi(idss: any): Promise<any>;
    getAllFilesOfMultipleFolderIds(parent_folder_ids_array: any): Promise<any[]>;
    getAllFilesOfApp(): Promise<(import("mongoose").Document<unknown, any, File> & File & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}

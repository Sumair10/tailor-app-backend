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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Request } from 'express';
import { FolderService } from './folder.service';
export declare class FolderController {
    private readonly folderService;
    constructor(folderService: FolderService);
    createFolder(req: Request): Promise<any>;
    getAllProjects(id: string, isAdmin: boolean, parent_folder: string): Promise<any>;
    getFoldersOfFolder(parentFolderId: string): Promise<any>;
    getAllFoldersOfApp(): Promise<(import("mongoose").Document<unknown, any, import("./folder.schema").Folder> & import("./folder.schema").Folder & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}

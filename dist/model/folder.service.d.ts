import { Model } from 'mongoose';
import { Folder } from './folder.schema';
export declare class FolderService {
    private readonly folderModel;
    constructor(folderModel: Model<Folder>);
    createFolder(req: any): Promise<any>;
    getAllProjects(id: any, isAdmin: any): Promise<any>;
    getFoldersOfFolder(folderId: any): Promise<any>;
}

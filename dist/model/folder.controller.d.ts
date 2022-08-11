import { Request } from 'express';
import { FolderService } from './folder.service';
export declare class FolderController {
    private readonly folderService;
    constructor(folderService: FolderService);
    createFolder(req: Request): Promise<any>;
    getAllProjects(id: string, isAdmin: boolean): Promise<any>;
    getFoldersOfFolder(parentFolderId: string): Promise<any>;
}

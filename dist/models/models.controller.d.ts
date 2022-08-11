import { ModelsService } from './models.service';
export declare class ModelsController {
    private readonly modelsService;
    constructor(modelsService: ModelsService);
    getAllModels(): Promise<any>;
}

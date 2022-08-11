import { Model } from 'mongoose';
import { Models } from './models.schema';
export declare class ModelsService {
    private readonly modelsModel;
    constructor(modelsModel: Model<Models>);
    getAllModels(): Promise<any>;
}

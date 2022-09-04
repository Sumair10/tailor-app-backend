import { Model } from 'mongoose';
import { Measurement } from 'src/measurement/measurement.schema';
import { Shop } from 'src/shop/shop.schema';
import { Services } from './services.schema';
export declare class ServicesService {
    private readonly servicesModel;
    private readonly measurementModel;
    private readonly shopModel;
    constructor(servicesModel: Model<Services>, measurementModel: Model<Measurement>, shopModel: Model<Shop>);
    createServices(req: any): Promise<any>;
    getServices(servicesId: string): Promise<any>;
    updateServices(servicesId: any, servicesData: any): Promise<any>;
    deleteServices(servicesId: string): Promise<any>;
}

import { Request } from 'express';
import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    createServices(req: Request): Promise<any>;
    getServices(servicesId: string): Promise<any>;
    updateServices(servicesId: String, servicesData: any): Promise<any>;
    deleteServices(servicesId: string): Promise<any>;
    getAllServicesOfShop(shopId: string): Promise<any>;
}

import { Model } from 'mongoose';
import { Measurement } from './measurement.schema';
import { ShopService } from 'src/shop/shop.service';
import { CustomerService } from 'src/customer/customer.service';
export declare class MeasurementService {
    private readonly measurementModel;
    private readonly ShopService;
    private readonly CustomerService;
    constructor(measurementModel: Model<Measurement>, ShopService: ShopService, CustomerService: CustomerService);
    createMeasurement(req: any): Promise<any>;
    deleteMeasurement(measurementId: string): Promise<any>;
}

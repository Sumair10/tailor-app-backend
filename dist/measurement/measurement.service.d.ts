import { Model } from 'mongoose';
import { Measurement } from './measurement.schema';
import { Shop } from 'src/shop/shop.schema';
import { Customer } from 'src/customer/customer.schema';
export declare class MeasurementService {
    private readonly measurementModel;
    private readonly customerModel;
    private readonly shopModel;
    constructor(measurementModel: Model<Measurement>, customerModel: Model<Customer>, shopModel: Model<Shop>);
    createMeasurement(req: any): Promise<any>;
    getMeasurement(measurementId: string): Promise<any>;
    updateMeasurement(measurementId: any, measurementData: any): Promise<any>;
    deleteMeasurement(measurementId: string): Promise<any>;
}

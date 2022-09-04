import { Model } from 'mongoose';
import { Shop } from 'src/shop/shop.schema';
import { Measurement } from './measurement.schema';
export declare class MeasurementService {
    private readonly measurementModel;
    private readonly shopModel;
    constructor(measurementModel: Model<Measurement>, shopModel: Model<Shop>);
    createMeasurement(req: any): Promise<any>;
    getMeasurement(measurementId: string): Promise<any>;
    updateMeasurement(measurementId: any, measurementData: any): Promise<any>;
    deleteMeasurement(measurementId: string): Promise<any>;
    getAllMeasurementsOfShop(shopId: string): Promise<any>;
}

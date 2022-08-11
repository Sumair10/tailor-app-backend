import { Model } from 'mongoose';
import { Measurement } from './measurement.schema';
export declare class MeasurementService {
    private readonly measurementModel;
    constructor(measurementModel: Model<Measurement>);
    createMeasurement(req: any): Promise<any>;
}

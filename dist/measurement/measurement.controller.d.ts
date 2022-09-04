import { Request } from 'express';
import { MeasurementService } from './measurement.service';
export declare class MeasurementController {
    private readonly measurementService;
    constructor(measurementService: MeasurementService);
    createMeasurement(req: Request): Promise<any>;
    getMeasurement(measurementId: string): Promise<any>;
    updateMeasurement(measurementId: String, measurementData: any): Promise<any>;
    deleteMeasurement(measurementId: string): Promise<any>;
    getAllMeasurementsOfShop(shopId: string): Promise<any>;
}

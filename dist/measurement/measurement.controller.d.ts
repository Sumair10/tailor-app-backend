import { Request } from 'express';
import { MeasurementService } from './measurement.service';
export declare class MeasurementController {
    private readonly measurementService;
    constructor(measurementService: MeasurementService);
    createMeasurement(req: Request): Promise<any>;
    deleteMeasurement(measurementId: string): Promise<any>;
}

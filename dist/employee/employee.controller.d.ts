import { Request } from 'express';
import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    createEmployee(req: Request): Promise<any>;
    deleteEmployee(employeeId: string): Promise<any>;
}

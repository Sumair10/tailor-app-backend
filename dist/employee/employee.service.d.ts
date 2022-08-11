import { Model } from 'mongoose';
import { Employee } from './employee.schema';
export declare class EmployeeService {
    private readonly employeeModel;
    constructor(employeeModel: Model<Employee>);
    createEmployee(req: any): Promise<any>;
    deleteEmployee(employeeId: string): Promise<any>;
}

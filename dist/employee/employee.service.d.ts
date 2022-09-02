import { Model } from 'mongoose';
import { Shop } from 'src/shop/shop.schema';
import { Employee } from './employee.schema';
export declare class EmployeeService {
    private readonly employeeModel;
    private readonly shopModel;
    constructor(employeeModel: Model<Employee>, shopModel: Model<Shop>);
    createEmployee(req: any): Promise<any>;
    getEmployee(employeeId: string): Promise<any>;
    updateEmployee(employeeId: any, employeeData: any): Promise<any>;
    deleteEmployee(employeeId: string): Promise<any>;
}

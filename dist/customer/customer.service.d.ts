import { Model } from 'mongoose';
import { Customer } from './customer.schema';
export declare class CustomerService {
    private readonly customerModel;
    constructor(customerModel: Model<Customer>);
    createCustomer(req: any): Promise<any>;
    deleteCustomer(customerId: string): Promise<any>;
}

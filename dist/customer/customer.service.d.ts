import { Model } from 'mongoose';
import { Shop } from 'src/shop/shop.schema';
import { Customer } from './customer.schema';
export declare class CustomerService {
    private readonly customerModel;
    private readonly shopModel;
    constructor(customerModel: Model<Customer>, shopModel: Model<Shop>);
    createCustomer(req: any): Promise<any>;
    getCustomer(customerId: string): Promise<any>;
    updateCustomer(customerId: any, customerData: any): Promise<any>;
    deleteCustomer(customerId: string): Promise<any>;
}

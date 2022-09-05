import { Model } from 'mongoose';
import { Order } from 'src/order/order.schema';
import { Shop } from 'src/shop/shop.schema';
import { Customer } from './customer.schema';
export declare class CustomerService {
    private readonly customerModel;
    private readonly shopModel;
    private readonly orderModel;
    constructor(customerModel: Model<Customer>, shopModel: Model<Shop>, orderModel: Model<Order>);
    createCustomer(req: any): Promise<any>;
    getCustomer(customerId: string): Promise<any>;
    updateCustomer(customerId: any, customerData: any): Promise<any>;
    deleteCustomer(customerId: string): Promise<any>;
    getAllCustomersOfShop(shopId: string): Promise<any>;
}

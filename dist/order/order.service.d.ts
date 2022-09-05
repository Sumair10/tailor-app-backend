import { Model } from 'mongoose';
import { Order } from './order.schema';
import { Customer } from 'src/customer/customer.schema';
import { Employee } from 'src/employee/employee.schema';
import { Shop } from 'src/shop/shop.schema';
export declare class OrderService {
    private readonly orderModel;
    private readonly customerModel;
    private readonly employeeModel;
    private readonly shopModel;
    constructor(orderModel: Model<Order>, customerModel: Model<Customer>, employeeModel: Model<Employee>, shopModel: Model<Shop>);
    createOrder(req: any): Promise<any>;
    getOrder(orderId: string): Promise<any>;
    updateOrder(orderId: any, orderData: any): Promise<any>;
    deleteOrder(orderId: string): Promise<any>;
    getAllOrdersOfShop(shopId: string): Promise<any>;
}

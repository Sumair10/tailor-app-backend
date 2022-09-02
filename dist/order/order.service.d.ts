import { Model } from 'mongoose';
import { Order } from './order.schema';
import { Customer } from 'src/customer/customer.schema';
import { Employee } from 'src/employee/employee.schema';
export declare class OrderService {
    private readonly orderModel;
    private readonly customerModel;
    private readonly employeeModel;
    constructor(orderModel: Model<Order>, customerModel: Model<Customer>, employeeModel: Model<Employee>);
    createOrder(req: any): Promise<any>;
    getOrder(orderId: string): Promise<any>;
    updateOrder(orderId: any, orderData: any): Promise<any>;
    deleteOrder(orderId: string): Promise<any>;
}

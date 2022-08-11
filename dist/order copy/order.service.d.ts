import { Model } from 'mongoose';
import { Order } from './order.schema';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    createOrder(req: any): Promise<any>;
}

import { Request } from 'express';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(req: Request): Promise<any>;
    getOrder(orderId: string): Promise<any>;
    updateOrder(orderId: String, orderData: any): Promise<any>;
    deleteOrder(orderId: string): Promise<any>;
}

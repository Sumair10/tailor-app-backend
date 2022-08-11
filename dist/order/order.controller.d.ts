import { Request } from 'express';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(req: Request): Promise<any>;
}

import { Request } from 'express';
import { CustomerService } from './customer.service';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(req: Request): Promise<any>;
}

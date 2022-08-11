import { NodemailerService } from './nodemailer.service';
export declare class NodemailerController {
    private readonly nodemailerService;
    constructor(nodemailerService: NodemailerService);
    sendMail(obj: Object): Promise<{
        responseCode: number | {
            info: any;
        };
        result: number | {
            info: any;
        };
    }>;
}

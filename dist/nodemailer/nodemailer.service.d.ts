export declare class NodemailerService {
    constructor();
    sendInvoiceToPayerEmail: (invoiceData: any) => Promise<(number | {
        info: any;
    })[]>;
    sendInvoiceToCryptoEmail: (invoiceData: any) => Promise<(number | {
        info: any;
    })[]>;
    mailToCustomMail: (invoiceData: any) => Promise<(number | {
        info: any;
    })[]>;
}

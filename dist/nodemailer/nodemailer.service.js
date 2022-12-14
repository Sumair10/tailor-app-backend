"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: '',
        clientId: '',
        clientSecret: '',
        refreshToken: '',
        accessToken: '',
        expires: 3599
    }
});
let NodemailerService = class NodemailerService {
    constructor() {
        this.sendInvoiceToPayerEmail = async (invoiceData) => {
            try {
                let info = await transporter.sendMail({
                    from: '',
                    to: "" + `${invoiceData.payerEmail}`,
                    subject: 'Receipt of Crypto Delivery Payment ' + `${invoiceData.payerID}`,
                    html: `
                <h2>************Paid Invoice***************</h2> 
                <hr/><hr/>
                <h3>Customer Info : </h3>
                <h4><span><b>Payer Name:         </b> ${invoiceData.payerName} <span/></h4>
                <h4><span><b>Payer Email:        </b> ${invoiceData.payerEmail} <span/></h4>
                <h4><span><b>Payer ID:           </b> ${invoiceData.payerID} <span/></h4>
                <h4><span><b>Payer Status:     </b> ${invoiceData.payerStatus} <span/></h4>
                <hr/> <hr/>
                <h3>Merchant Info :</h3>
                <h4><span><b>Crypto Farm via delivery.crypto.farm</h4>
                
                <hr/> <hr/>
                <h3>Payment Info :</h3>
                <h4><span><b>Pay ID:             </b> ${invoiceData.payID} <span/></h4>
                <h4><span><b>Payment Mode:       </b> ${invoiceData.paymentMode} <span/></h4>
                <h4><span><b>Currency:           </b> ${invoiceData.currency} <span/></h4>
                <h4><span><b>Payment Amount:             </b> ${invoiceData.amount} <span/></h4>
                <h4><span><b>Parent Payment:     </b> ${invoiceData.parentPayment} <span/></h4>
                <h4><span><b>Payment Method:     </b> ${invoiceData.paymentMethod} <span/></h4>
                <h4><span><b>Payment Time:       </b> ${invoiceData.paymentTime} <span/></h4>
                <hr/><hr/>
                <h3>Crypto Delivery Detail :</h3>
                <h4><span><b>Crypto Currency Unit:</b> ${invoiceData.cryptoCurrency} <span/></h4>
                <h4><span><b>Printed Wallet Amount:      </b> ${invoiceData.cryptoAmount} <span/></h4>
                <h4><span><b>Wallet Design: </b> ${invoiceData.cryptoFarmDesign} <span/></h4>
                <h4><span><b>Delivery Speed:     </b> ${invoiceData.deliverySpeed} <span/></h4>
                <h4><span><b>Printed Schedule: </b> ${invoiceData.printingSchedule} <span/></h4>
                <hr/><hr/>
                <h3>Shipping Details :</h3>
                <h4><span><b>City: </b> ${invoiceData.shippingAddress.city} <span/></h4>
                <h4><span><b>Country Code: </b> ${invoiceData.shippingAddress.country_code} <span/></h4>
                <h4><span><b>Address: </b> ${invoiceData.shippingAddress.line1 + " " + invoiceData.shippingAddress.line2} <span/></h4>
                <h4><span><b>State: </b> ${invoiceData.shippingAddress.state} <span/></h4>
                <h4><span><b>Postal Code: </b> ${invoiceData.shippingAddress.postal_code} <span/></h4>
                <h4><span><b>Recipient Name: </b> ${invoiceData.shippingAddress.recipient_name} <span/></h4>
                <hr/><hr/>
                <h3>Note :</h3>
                <h4><span><b>Description: </b> ${invoiceData.description} <span/><br/>
                <span>You will receive exactly the Printed Wallet Amount as ordered <span/>
                <span>Only the Payer Email on this Paid Invoice can be used for delivery inquiries and confirmation regarding the order <span/> <br/>
                <span>Your wallet design will be shiped to you as soon as possible. 
                Once your wallet design is received in hand,please follow the simple delivery confirmation instructions included in the letter.
                Thankyou, Crypto Farm, Canada<span/>
                </h4>
                <h2>**************End*****************</h2>`
                });
                const mail = {
                    info: info,
                };
                console.log("message checked=>", mail);
                return [200, mail];
            }
            catch (e) {
                console.log("catching error in mail==>", e.message);
                throw [404, "Email not send"];
            }
        };
        this.sendInvoiceToCryptoEmail = async (invoiceData) => {
            try {
                let info = await transporter.sendMail({
                    from: '',
                    to: "",
                    subject: 'Receipt of Crypto Delivery Payment ' + `${invoiceData.payerID}`,
                    html: `
                <h2>************Paid Invoice***************</h2> 
                <hr/><hr/>
                <h3>Customer Info : </h3>
                <h4><span><b>Payer Name:         </b> ${invoiceData.payerName} <span/></h4>
                <h4><span><b>Payer Email:        </b> ${invoiceData.payerEmail} <span/></h4>
                <h4><span><b>Payer ID:           </b> ${invoiceData.payerID} <span/></h4>
                <h4><span><b>Payer Status:     </b> ${invoiceData.payerStatus} <span/></h4>
                <hr/> <hr/>
                <h3>Merchant Info :</h3>
                <h4><span><b>Crypto Farm via delivery.crypto.farm</h4>
                
                <hr/> <hr/>
                <h3>Payment Info :</h3>
                <h4><span><b>Pay ID:             </b> ${invoiceData.payID} <span/></h4>
                <h4><span><b>Payment Mode:       </b> ${invoiceData.paymentMode} <span/></h4>
                <h4><span><b>Currency:           </b> ${invoiceData.currency} <span/></h4>
                <h4><span><b>Payment Amount:             </b> ${invoiceData.amount} <span/></h4>
                <h4><span><b>Parent Payment:     </b> ${invoiceData.parentPayment} <span/></h4>
                <h4><span><b>Payment Method:     </b> ${invoiceData.paymentMethod} <span/></h4>
                <h4><span><b>Payment Time:       </b> ${invoiceData.paymentTime} <span/></h4>
                <hr/><hr/>
                <h3>Crypto Delivery Detail :</h3>
                <h4><span><b>Crypto Currency Unit:</b> ${invoiceData.cryptoCurrency} <span/></h4>
                <h4><span><b>Printed Wallet Amount:      </b> ${invoiceData.cryptoAmount} <span/></h4>
                <h4><span><b>Wallet Design: </b> ${invoiceData.cryptoFarmDesign} <span/></h4>
                <h4><span><b>Delivery Speed:     </b> ${invoiceData.deliverySpeed} <span/></h4>
                <h4><span><b>Printed Schedule: </b> ${invoiceData.printingSchedule} <span/></h4>
                <hr/><hr/>
                <h3>Shipping Details :</h3>
                <h4><span><b>City: </b> ${invoiceData.shippingAddress.city} <span/></h4>
                <h4><span><b>Country Code: </b> ${invoiceData.shippingAddress.country_code} <span/></h4>
                <h4><span><b>Address: </b> ${invoiceData.shippingAddress.line1 + " " + invoiceData.shippingAddress.line2} <span/></h4>
                <h4><span><b>State: </b> ${invoiceData.shippingAddress.state} <span/></h4>
                <h4><span><b>Postal Code: </b> ${invoiceData.shippingAddress.postal_code} <span/></h4>
                <h4><span><b>Recipient Name: </b> ${invoiceData.shippingAddress.recipient_name} <span/></h4>
                <hr/><hr/>
                <h3>Note :</h3>
                <h4><span><b>Description: </b> ${invoiceData.description} <span/><br/><br/>
                <span>You will receive exactly the Printed Wallet Amount as ordered <span/>
                <span>Only the Payer Email on this Paid Invoice can be used for delivery inquiries and confirmation regarding the order <span/> <br/>
                <span>Your wallet design will be shiped to you as soon as possible. 
                Once your wallet design is received in hand,please follow the simple delivery confirmation instructions included in the letter.
                Thankyou, Crypto Farm, Canada<span/>
                </h4>
                <h2>**************End*****************</h2>`
                });
                const mail = {
                    info: info,
                };
                console.log("message checked=>", mail);
                return [200, mail];
            }
            catch (e) {
                console.log("catching error in mail==>", e.message);
                throw [404, "Email not send"];
            }
        };
        this.mailToCustomMail = async (invoiceData) => {
            try {
                const resultFromPayer = await this.sendInvoiceToPayerEmail(invoiceData);
                return resultFromPayer;
            }
            catch (e) {
                throw [404, "Email not Send"];
            }
        };
    }
};
NodemailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NodemailerService);
exports.NodemailerService = NodemailerService;
//# sourceMappingURL=nodemailer.service.js.map
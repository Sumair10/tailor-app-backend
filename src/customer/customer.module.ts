import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerSchema } from './customer.schema';
import { ShopModule } from 'src/shop/shop.module';
import { ShopService } from 'src/shop/shop.service';
import { ShopSchema } from 'src/shop/shop.schema';

@Module({
  imports: [
    ShopModule,
    MongooseModule.forFeature([
      { name: 'Customer', schema: CustomerSchema},
      {
        name: 'Shop',
        schema: ShopSchema,
      },
      // { name: 'Organization', schema: OrgSchema },
      // { name: 'Auth', schema: AuthSchema },
      // { name: 'Models', schema: ModelsSchema },
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService , ShopService],
})
export class CustomerModule {}

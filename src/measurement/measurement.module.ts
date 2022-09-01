import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementController } from './measurement.controller';
import { MeasurementSchema } from './measurement.schema';
import { CustomerSchema } from 'src/customer/customer.schema';
import { ShopSchema } from 'src/shop/shop.schema';
import { ShopModule } from 'src/shop/shop.module';
import { CustomerModule } from 'src/customer/customer.module';
import { ShopService } from 'src/shop/shop.service';
import { CustomerService } from 'src/customer/customer.service';

@Module({
  imports: [
    CustomerModule,
    ShopModule,
    MongooseModule.forFeature([
      { name: 'Measurement', schema: MeasurementSchema},
      {
        name: 'Shop',
        schema: ShopSchema,
      },
      {
        name: 'Customer',
        schema: CustomerSchema,
      },
      // { name: 'Organization', schema: OrgSchema },
      // { name: 'Auth', schema: AuthSchema },
      // { name: 'Models', schema: ModelsSchema },
    ]),
  ],
  controllers: [MeasurementController],
  providers: [MeasurementService , ShopService , CustomerService],
})
export class MeasurementModule {}

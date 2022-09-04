import { AuthSchema } from './../auth/auth.schema';
import { OrgSchema } from './../organization/organization.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeSchema } from './employee.schema';
import { ShopModule } from 'src/shop/shop.module';
import { ShopSchema } from 'src/shop/shop.schema';
import { ServicesModule } from 'src/services/services.module';
import { ServicesSchema } from 'src/services/services.schema';



@Module({
  imports: [
    ShopModule,
    ServicesModule,
    MongooseModule.forFeature([
      { name: 'Employee', schema: EmployeeSchema},
      {
        name: 'Shop',
        schema: ShopSchema,
      },
      {
        name: 'Services',
        schema: ServicesSchema,
      },
      // { name: 'Organization', schema: OrgSchema },
      // { name: 'Auth', schema: AuthSchema },
      // { name: 'Models', schema: ModelsSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}

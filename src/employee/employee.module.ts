import { AuthSchema } from './../auth/auth.schema';
import { OrgSchema } from './../organization/organization.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeSchema } from './employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Employee', schema: EmployeeSchema},
      // { name: 'Organization', schema: OrgSchema },
      // { name: 'Auth', schema: AuthSchema },
      // { name: 'Models', schema: ModelsSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}

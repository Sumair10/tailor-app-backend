import { OrgSchema } from './../organization/organization.schema';
import { AuthSchema } from './auth.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { OrgService } from 'src/organization/organization.service';
import { OrgModule } from 'src/organization/organization.module';

@Module({
  imports: [
    OrgModule,
    MongooseModule.forFeature([
      {
        name: 'Auth',
        schema: AuthSchema,
      },
      {
        name: 'Organization',
        schema: OrgSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  // providers: [AuthService, OrgService],
  providers: [AuthService],
})
export class AuthModule {}

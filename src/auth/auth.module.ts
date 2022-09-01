import { OrgSchema } from './../organization/organization.schema';
import { AuthSchema } from './auth.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ShopModule } from 'src/shop/shop.module';
import {ShopSchema} from 'src/shop/shop.schema'

@Module({
  imports: [
    ShopModule,
    MongooseModule.forFeature([
      {
        name: 'Auth',
        schema: AuthSchema,
      },
      {
        name: 'Shop',
        schema: ShopSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  // providers: [AuthService, OrgService],
  providers: [AuthService],
})
export class AuthModule {}

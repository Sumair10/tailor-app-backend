import { OrgSchema } from './organization.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { OrgController } from './organization.controller';
import { OrgService } from './organization.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Organization', schema: OrgSchema }])],
  controllers: [OrgController],
  providers: [OrgService],
  exports: [OrgService],
})
export class OrgModule {}

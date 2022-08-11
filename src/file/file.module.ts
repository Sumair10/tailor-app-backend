import { AuthSchema } from './../auth/auth.schema';
import { OrgSchema } from './../organization/organization.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FileSchema } from './file.schema';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'File', schema: FileSchema },
      { name: 'Organization', schema: OrgSchema },
      { name: 'Auth', schema: AuthSchema },
    ]),
    
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}

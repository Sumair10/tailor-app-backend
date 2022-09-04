import { FolderModule } from './folder/folder.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { OrgModule } from './organization/organization.module';
import { FileModule } from './file/file.module';
import { ModelsModule } from './models/models.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { MeasurementModule } from './measurement/measurement.module';
import { EmployeeModule } from './employee/employee.module';
import { ShopModule } from './shop/shop.module';
import { ServicesModule } from './services/services.module';

require('dotenv').config({ path: './.env' });

@Module({
  imports: [
    // MailerModule.forRoot({
    //   transport: {
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false, // upgrade later with STARTTLS
    //     auth: {
    //       user: 'tezeracttest@gmail.com',
    //       pass: 'pkqjlretkiavzrfj',
    //     },
    //     tls: {
    //       rejectUnauthorized: true,
    //     },
    //   },
    // }),
    // AuthModule,
    // OrgModule,
    // FolderModule,
    // FileModule,
    // ModelsModule,
    
    OrderModule,
    CustomerModule,
    MeasurementModule,
    EmployeeModule,
    AuthModule,
    ShopModule,
    ServicesModule,
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
    }),
    NodemailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

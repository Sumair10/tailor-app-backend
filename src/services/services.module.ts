import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ServicesSchema } from './services.schema';
import { MeasurementModule } from 'src/measurement/measurement.module';
import { MeasurementService } from 'src/measurement/measurement.service';
import { MeasurementSchema } from 'src/measurement/measurement.schema';

@Module({
  imports: [
    MeasurementModule,
    MongooseModule.forFeature([
      { name: 'Services', schema: ServicesSchema},
      {
        name: 'Measurement',
        schema: MeasurementSchema,
      },
      // { name: 'Organization', schema: OrgSchema },
      // { name: 'Auth', schema: AuthSchema },
      // { name: 'Models', schema: ModelsSchema },
    ]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService , MeasurementService],
})
export class ServicesModule {}

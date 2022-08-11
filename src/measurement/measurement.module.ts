import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementController } from './measurement.controller';
import { MeasurementSchema } from './measurement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Measurement', schema: MeasurementSchema},
      // { name: 'Organization', schema: OrgSchema },
      // { name: 'Auth', schema: AuthSchema },
      // { name: 'Models', schema: ModelsSchema },
    ]),
  ],
  controllers: [MeasurementController],
  providers: [MeasurementService],
})
export class MeasurementModule {}

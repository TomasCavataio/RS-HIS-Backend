import { Module } from '@nestjs/common';
import { PatientController } from './UI/patient.controller';
import { PatientService } from './app/service/patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { patientSchema } from './infrastructure/MongoDB/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Patient', schema: patientSchema }])
  ],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule { }

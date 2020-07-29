import { Module } from '@nestjs/common';
import { PatientController } from './UI/patient.controller';
import { PatientService } from './app/service/patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { patientSchema } from './infrastructure/MongoDB/patient.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Patient', schema: patientSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule { }

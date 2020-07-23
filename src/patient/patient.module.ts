import { Module } from '@nestjs/common';
import { PatientController } from './UI/patient.controller';
import { PatientService } from './app/service/patient.service';

@Module({
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule { }

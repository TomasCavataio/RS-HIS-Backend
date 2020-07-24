import { Controller, Get, Req, Param } from '@nestjs/common';
import { PatientService } from '../app/service/patient.service';
import { Patient } from '../domain/models/patient.interface';
import { ApiTags } from '@nestjs/swagger'


@ApiTags('Patients')
@Controller('/patients')
export class PatientController {

    constructor(private patientService: PatientService) { }

    @Get()
    getAllPatients(): Promise<Patient[]> {
        return this.patientService.getAllPatients();
    }

    @Get('/:id')
    getPatient(@Param('id') id: string): Promise<Patient[]> {
        return this.patientService.getPatient(id);
    }
}

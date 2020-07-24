import { Controller, Get, Req, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { PatientService } from '../app/service/patient.service';
import { Patient } from '../domain/models/patient.interface';
import { ApiTags } from '@nestjs/swagger'
import { PatientDto } from '../domain/dto/patient-dto';


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

    @Delete('/:id')
    deletePatient(@Param('id') id: string): Promise<Patient[]> {
        return this.patientService.deletePatient(id);
    }

    @Post()
    createPatient(@Body() patientDto: PatientDto): Promise<Patient> {
        return this.patientService.createPatient(patientDto);
    }

    @Put('/:id')
    updateProfessional(@Param('id') id: string, @Body() patientDto: PatientDto): Promise<Patient> {
        return this.patientService.updatePatient(id, patientDto);
    }
}

import { Controller, Get, Req, Param, Delete, Post, Body, Put, Logger, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { PatientService } from '../app/service/patient.service';
import { Patient } from '../domain/models/patient.interface';
import { ApiTags } from '@nestjs/swagger'
import { PatientDto } from '../domain/dto/patient-dto';
import { AllExceptionsFilter } from 'src/common/exceptions/exceptions-filter';

@ApiTags('Patients')
@Controller('/patients')
export class PatientController {

    constructor(private patientService: PatientService) { }

    @Get()
    @UseFilters(AllExceptionsFilter)
    getAllPatients(): Promise<Patient[]> {
        return this.patientService.getAllPatients();
    }

    @Get('/:id')
    @UseFilters(AllExceptionsFilter)
    getPatient(@Param('id') id: string): Promise<Patient> {
        return this.patientService.getPatient(id);
    }

    @Delete('/:id')
    @UseFilters(AllExceptionsFilter)
    deletePatient(@Param('id') id: string): Promise<Patient> {
        return this.patientService.deletePatient(id);
    }

    @Post()
    @UseFilters(AllExceptionsFilter)
    createPatient(@Body() patientDto: PatientDto): Promise<Patient> {
        return this.patientService.createPatient(patientDto);
    }

    @Put('/:id')
    @UseFilters(AllExceptionsFilter)
    updateProfessional(@Param('id') id: string, @Body() patientDto: PatientDto): Promise<Patient> {
        return this.patientService.updatePatient(id, patientDto);
    }
}

import { Controller, Get, Req, Param, Delete, Post, Body, Put, UseFilters } from '@nestjs/common';
import { Professional } from '../domain/models/professional.interface';
import { ProfessionalService } from '../app/service/professional.service';
import { ApiTags } from '@nestjs/swagger'
import { create } from 'domain';
import { ProfessionalDto } from '../domain/dto/professional-dto';
import { AllExceptionsFilter } from 'src/common/exceptions/exceptions-filter';


@ApiTags('Professionals')
@Controller('/professionals')
export class ProfessionalController {

    constructor(private professionalService: ProfessionalService) { }

    //Calls the professionalService 
    @Get()
    @UseFilters(AllExceptionsFilter)
    getAllProfessionals(@Req() request): Promise<Professional[]> {
        return this.professionalService.getAllProfessionals();
    }

    @Get('/:id')
    @UseFilters(AllExceptionsFilter)
    getPatient(@Param('id') id: string): Promise<Professional> {
        return this.professionalService.getProfessional(id);
    }

    @Delete('/:id')
    @UseFilters(AllExceptionsFilter)
    deleteProfessional(@Param('id') id: string): Promise<Professional> {
        return this.professionalService.deleteProfessional(id);
    }

    @Post()
    @UseFilters(AllExceptionsFilter)
    createProfessional(@Body() professionalDto: ProfessionalDto): Promise<Professional> {
        return this.professionalService.createProfessional(professionalDto);
    }

    @Put('/:id')
    @UseFilters(AllExceptionsFilter)
    updateProfessional(@Param('id') id: string, @Body() professionalDto: ProfessionalDto): Promise<Professional> {
        return this.professionalService.updateProfessional(id, professionalDto);
    }
}

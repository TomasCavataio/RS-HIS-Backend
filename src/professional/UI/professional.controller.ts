import { Controller, Get, Req, Param, Delete, Post, Body } from '@nestjs/common';
import { Professional } from '../domain/models/professional.interface';
import { ProfessionalService } from '../app/service/professional.service';
import { ApiTags } from '@nestjs/swagger'
import { create } from 'domain';
import { CreateProfessionalDto } from '../domain/dto/create-professional-dto';


@ApiTags('Professionals')
@Controller('/professionals')
export class ProfessionalController {

    constructor(private professionalService: ProfessionalService) { }

    //Calls the professionalService 
    @Get()
    getAllProfessionals(@Req() request): Promise<Professional[]> {
        return this.professionalService.getAllProfessionals();
    }

    @Get('/:id')
    getPatient(@Param('id') id: string): Promise<Professional> {
        return this.professionalService.getProfessional(id);
    }

    @Delete('/:id')
    deleteProfessional(@Param('id') id: string): Promise<Professional> {
        return this.professionalService.deleteProfessional(id);
    }

    @Post()
    createProfessional(@Body() professionalDto: CreateProfessionalDto): Promise<Professional> {
        return this.professionalService.createProfessional(professionalDto);
    }

}

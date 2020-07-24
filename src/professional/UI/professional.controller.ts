import { Controller, Get, Req, Param } from '@nestjs/common';
import { Professional } from '../domain/models/professional.interface';
import { ProfessionalService } from '../app/service/professional.service';
import { ApiTags } from '@nestjs/swagger'


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
    getPatient(@Param('id') id: string): Promise<Professional[]> {
        return this.professionalService.getProfessional(id);
    }
}

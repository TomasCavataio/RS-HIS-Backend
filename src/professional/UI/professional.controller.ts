import { Controller, Get, Req } from '@nestjs/common';
import { Professional } from '../domain/models/professional.interface';
import { ProfessionalService } from '../app/service/professional.service';

@Controller('professional')
export class ProfessionalController {

    constructor(private professionalService: ProfessionalService) { }

    //Calls the professionalService 
    @Get('/professionals')
    getAllProfessionals(): Professional[] {
        return this.professionalService.getAllProfessionals();
    }
}

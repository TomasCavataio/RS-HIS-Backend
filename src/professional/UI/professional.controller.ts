import { Controller, Get, Req, Param, Delete, Post, Body, Put, UseGuards } from '@nestjs/common';
import { Professional } from '../domain/models/professional.interface';
import { ProfessionalService } from '../app/service/professional.service';
import { ApiTags } from '@nestjs/swagger'
import { ProfessionalDto } from '../domain/dto/professional-dto';
import { AuthGuard } from '@nestjs/passport';


@ApiTags('Professionals')
@Controller('/professionals')
@UseGuards(AuthGuard())
export class ProfessionalController {

    constructor(private professionalService: ProfessionalService) { }

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
    createProfessional(@Body() professionalDto: ProfessionalDto): Promise<Professional> {
        return this.professionalService.createProfessional(professionalDto);
    }

    @Put('/:id')
    updateProfessional(@Param('id') id: string, @Body() professionalDto: ProfessionalDto): Promise<Professional> {
        return this.professionalService.updateProfessional(id, professionalDto);
    }
}

import { Module } from '@nestjs/common';
import { ProfessionalController } from './UI/professional.controller';
import { ProfessionalService } from './app/service/professional.service';
import { MongooseModule } from '@nestjs/mongoose'
import { professionalSchema } from './infrastructure/MongoDB/professional.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Professional', schema: professionalSchema }])
    ],
    controllers: [ProfessionalController],
    providers: [ProfessionalService]
})
export class ProfessionalModule { }

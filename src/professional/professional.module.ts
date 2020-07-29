import { Module } from '@nestjs/common';
import { ProfessionalController } from './UI/professional.controller';
import { ProfessionalService } from './app/service/professional.service';
import { MongooseModule } from '@nestjs/mongoose'
import { professionalSchema } from './infrastructure/MongoDB/professional.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Professional', schema: professionalSchema }]),
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    ],
    controllers: [ProfessionalController],
    providers: [ProfessionalService]
})
export class ProfessionalModule { }

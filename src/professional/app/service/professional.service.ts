import { Injectable, Get } from '@nestjs/common';
import { Professional } from 'src/professional/domain/models/professional.interface';

@Injectable()
export class ProfessionalService {

    // Returns all patients from the database
    getAllProfessionals(): Professional[] {
        return
    }

}

import { Injectable, Get } from '@nestjs/common';
import { Professional } from 'src/professional/domain/models/professional.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
@Injectable()
export class ProfessionalService {

    constructor(@InjectModel('Professional') private readonly professionalModel: Model<Professional>) { }

    async getAllProfessionals(): Promise<Professional[]> {
        const professionals = await this.professionalModel.find();
        return professionals;
    }

    async getProfessional(id: string): Promise<Professional> {
        return await this.professionalModel.findById(id);
    }

    async deleteProfessional(id: string): Promise<Professional> {
        return await this.professionalModel.findByIdAndDelete(id);
    }
}


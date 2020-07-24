import { Injectable } from '@nestjs/common';
import { Patient } from 'src/patient/domain/models/patient.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {

    constructor(@InjectModel('Patient') private readonly patientModel: Model<Patient>) { }

    async getAllPatients(): Promise<Patient[]> {
        const patients = await this.patientModel.find();
        return patients;
    }

    async getPatient(id: string): Promise<Patient[]> {
        return await this.patientModel.findById(id);
    }

    async deletePatient(id: string): Promise<Patient[]> {
        return await this.patientModel.findByIdAndDelete(id);
    }
}

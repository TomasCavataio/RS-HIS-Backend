import { Injectable } from '@nestjs/common';
import { Patient } from 'src/patient/domain/models/patient.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from 'src/patient/domain/dto/create-patient-dto';

@Injectable()
export class PatientService {

    constructor(@InjectModel('Patient') private readonly patientModel: Model<Patient>) { }

    async getAllPatients(): Promise<Patient[]> {
        return await this.patientModel.find();
    }

    async getPatient(id: string): Promise<Patient[]> {
        return await this.patientModel.findById(id);
    }

    async deletePatient(id: string): Promise<Patient[]> {
        return await this.patientModel.findByIdAndDelete(id);
    }

    async createPatient(patientDto: CreatePatientDto): Promise<Patient> {
        const patient = new this.patientModel(patientDto);
        return await patient.save();
    }


}

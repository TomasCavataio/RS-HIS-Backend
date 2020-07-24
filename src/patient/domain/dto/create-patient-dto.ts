import { UserType, Gender, Address } from 'src/common/user-types.interface';
import { Insurance } from 'src/patient/domain/models/patient.interface';

export class CreatePatientDto {
    _id: string;
    userType: UserType;
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthdate: Date;
    nif: string;
    address: Address;
    nhc: string;
    insuranceCompanies: Insurance[];
}

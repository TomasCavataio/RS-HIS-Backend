import { UserType, Gender, Address } from 'src/common/user-types.interface'
import { Professions } from 'src/professional/domain/models/professional.interface'

export class CreateProfessionalDto {
    _id: string;
    userType: UserType;
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthdate: Date;
    nif: string;
    address: Address;
    medicalBoardNumber: string;
    professionalType: Professions;
}
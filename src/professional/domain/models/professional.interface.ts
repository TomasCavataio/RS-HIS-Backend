import { Gender, UserType, Address } from 'src/common/interfaces/user-types.interface';

export interface Professional {
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthDate: Date;
    nif: string;
    address: Address;
    userType: UserType;
    medicalBoardNumber: string;
    professionalType: Professions;
}

export type Professions = 'Doctor' | 'Nurse' | 'Administrative';


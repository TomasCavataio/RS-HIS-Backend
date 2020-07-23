import { Gender, UserType, Address } from 'src/common/user-types.interface';

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
    professionalType: Proffessions;
}

type Proffessions = 'Doctor' | 'Nurse' | 'Administrative';


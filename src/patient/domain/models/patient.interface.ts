import { Gender, UserType, Address } from 'src/common/interfaces/user-types.interface';

export interface Patient {
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthDate: Date;
    nif: string;
    address: Address;
    userType: UserType;
    nhc: string;
    insurances: Insurance[];
}

export interface Insurance {
    insuranceCompanyName: string;
    insuranceType: InsuranceType;
    cardNumber: string;
}

type InsuranceType = 'Health' | 'Family' | 'Dental';

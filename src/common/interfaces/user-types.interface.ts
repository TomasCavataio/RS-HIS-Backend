export type Gender = 'Male' | 'Female' | 'Other';

export type UserType = 'Patient' | 'Professional';

export interface Address {
    city: string;
    street: string;
    streetNumber: string;
    doorNumber: string;
    postalCode: string;
};

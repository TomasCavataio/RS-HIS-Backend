import * as mongoose from 'mongoose';

export const patientSchema = new mongoose.Schema({
    name: String,
    firstSurname: String,
    secondSurname: String,
    gender: String,
    birthDate: Date,
    nif: String,
    address: {
        street: String,
        streetNumber: String,
        doorNumber: String,
        postalCode: String,
        city: String,
    },
    userType: String,
    nhc: String,
    insurances: Array
})

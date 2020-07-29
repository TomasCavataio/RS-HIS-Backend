import { UserType, Gender, Address } from 'src/common/interfaces/user-types.interface';
import { Insurance } from 'src/patient/domain/models/patient.interface';
import { ApiProperty } from '@nestjs/swagger';

export class PatientDto {
    _id: string;
    @ApiProperty({ enum: ['Patient', 'Professional'] })
    userType: UserType;
    @ApiProperty()
    name: string;
    @ApiProperty()
    firstSurname: string;
    @ApiProperty()
    secondSurname: string;
    @ApiProperty({ enum: ['Male', 'Female', 'Other'] })
    gender: Gender;
    @ApiProperty()
    birthdate: Date;
    @ApiProperty()
    nif: string;
    @ApiProperty({
        properties: {
            city: { type: 'string' },
            street: { type: 'string' },
            streetNumber: { type: 'string' },
            doorNumber: { type: 'string' },
            postalCode: { type: 'string' }
        }
    })
    address: Address;
    @ApiProperty()
    nhc: string;
    @ApiProperty()
    insuranceCompanies: Insurance[];
}

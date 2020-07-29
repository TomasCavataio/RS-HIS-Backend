import { UserType, Gender, Address } from 'src/common/interfaces/user-types.interface'
import { Professions } from 'src/professional/domain/models/professional.interface'
import { ApiProperty } from '@nestjs/swagger';

export class ProfessionalDto {
    @ApiProperty()
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
    medicalBoardNumber: string;
    @ApiProperty()
    professionalType: Professions;
}
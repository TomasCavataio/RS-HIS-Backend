import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from 'src/auth/domain/dto/login-user-dto';
import { UserService } from 'src/users/app/service/user.service';
import { JwtService } from '@nestjs/jwt';
import *  as  bcrypt from 'bcrypt';
import { JwtPayLoad } from 'src/auth/domain/dto/payload-dto';
import { User } from 'src/users/domain/models/user.interface';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { };

    async login(loginUserDto: LoginUserDto) {
        let result = await this.userService.findByEmail(loginUserDto.email);
        return this.createJwtPayload(result);
    }

    createJwtPayload(user) {
        let data = {
            email: user.email,
            id: user._id
        }
        let jwt = this.jwtService.sign(data);
        return {
            expiresIn: 3600,
            token: jwt
        }
    }

    async validateUserByJwt(payload: JwtPayLoad): Promise<User> {
        let user = await this.userService.findByEmail(payload.email);
        if (user) return user;
    }
}

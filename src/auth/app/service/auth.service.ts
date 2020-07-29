import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from 'src/auth/domain/dto/login-user-dto';
import { UserService } from 'src/users/app/service/user.service';
import { JwtService } from '@nestjs/jwt';
import *  as  bcrypt from 'bcrypt';
import { JwtPayLoad } from 'src/auth/domain/dto/payload-dto';

@Injectable()
export class AuthService {


    constructor(private userService: UserService, private jwtService: JwtService) { };

    async login(loginUserDto: LoginUserDto) {
        let result = await this.userService.findByEmail(loginUserDto.email);
        if (!result) throw new NotFoundException();
        let checkPass = await bcrypt.compare(loginUserDto.password, result.password);
        if (!checkPass) throw new UnauthorizedException();

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


    async validateUserByJwt(payload: JwtPayLoad) {
        let user = await this.userService.findByEmail(payload.email);
        if (user) return user;
        throw new UnauthorizedException();
    }
}

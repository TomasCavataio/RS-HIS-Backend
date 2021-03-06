import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../service/auth.service';
import { JwtPayLoad } from '../../domain/dto/payload-dto';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: `${process.env.JWTKEY}`
        })
        Logger.log("Creando el jwtStrategy");
    }

    async validate(payload: JwtPayLoad) {
        Logger.log("Entrando a Validate");

        const user = await this.authService.validateUserByJwt(payload);
        if (!user) throw new UnauthorizedException();
        return user;

    }

}
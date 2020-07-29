import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../app/service/auth.service';
import { LoginUserDto } from '../domain/dto/login-user-dto';

@Controller('login')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() loginUserDto: LoginUserDto) {
        let result = await this.authService.login(loginUserDto);
        return result;
    }
}

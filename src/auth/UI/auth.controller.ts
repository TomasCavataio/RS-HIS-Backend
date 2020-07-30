import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../app/service/auth.service';
import { LoginUserDto } from '../domain/dto/login-user-dto';
import { LoginResponse } from '../domain/dto/login-response-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authorizations')
@Controller('login')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponse> {
        let result = await this.authService.login(loginUserDto);
        return result;
    }
}

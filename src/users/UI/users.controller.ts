import { Controller, Post, HttpException, HttpStatus, Logger, Body, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../app/service/user.service';
import { RegisterUserDto } from '../domain/dto/user-dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../domain/models/user.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Registration')
@Controller('register')
export class UsersController {

    constructor(private userService: UserService) { }

    @Post()
    registerUser(
        @Body() registerUserDto: RegisterUserDto): Promise<void> {
        return this.userService.registerUser(registerUserDto);
    }

}

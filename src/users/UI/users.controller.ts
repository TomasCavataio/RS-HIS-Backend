import { Controller, Post, HttpException, HttpStatus, Logger, Body, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../app/service/user.service';
import { RegisterUserDto } from '../domain/dto/user-dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('register')
export class UsersController {

    constructor(private userService: UserService) { }

    @Post()
    registerUser(
        @Body() registerUserDto: RegisterUserDto) {
        return this.userService.registerUser(registerUserDto);
    }


    @Get()
    @UseGuards(AuthGuard())
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('/guard')
    @UseGuards(AuthGuard())
    getGuardUser(@Req() req: Request) {
        Logger.log(JSON.stringify(req['user']));
        return "Entra";
    }

}

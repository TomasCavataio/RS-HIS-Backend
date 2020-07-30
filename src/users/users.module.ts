import { Module } from '@nestjs/common';
import { UsersController } from './UI/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './infrastructure/MongoDB/user.schema';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './app/service/user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  exports: [UserService],
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule { }

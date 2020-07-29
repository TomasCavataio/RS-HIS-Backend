import { Module } from '@nestjs/common';
import { UsersController } from './ui/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './infrastructure/MongoDB/user.schema';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './app/service/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  exports: [UserService],
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule { }

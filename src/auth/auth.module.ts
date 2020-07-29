import { Module } from '@nestjs/common';
import { AuthService } from './app/service/auth.service';
import { AuthController } from './UI/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './app/strategy/jwt-strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secretOrPrivateKey: `${process.env.JWTKEY}`,
      signOptions: {
        expiresIn: 3600
      }
    }),
    UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }

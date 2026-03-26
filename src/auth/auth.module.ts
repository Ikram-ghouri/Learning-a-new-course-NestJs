import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}

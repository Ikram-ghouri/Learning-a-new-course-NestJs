import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(registerUserDto: RegisterDto) {
    console.log('Received registration data:', registerUserDto);
    const newUser = await this.userService.create(registerUserDto);
    return {
      message: 'User registered successfully',
      user: newUser
    };
  }
}

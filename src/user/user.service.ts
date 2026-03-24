import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    createdUser() {
        return {message: 'User created'}
    }
}

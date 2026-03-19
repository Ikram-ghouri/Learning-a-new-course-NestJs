import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    registerUser() {
        // logic for user register
        return {message: 'User registered successfully'}
    }
}

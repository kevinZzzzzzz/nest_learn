import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  getUserHello(): string {
    return "I am userService's Hello User!";
  }
}

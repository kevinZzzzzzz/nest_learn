import { Injectable, Inject } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OrderService {
  // @Inject(UserService)
  // private userService: UserService;
  constructor(private userService: UserService) {}


  getOrder(): string {
    return this.userService.getUserHello()
  }
}

import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [{ id: 1, username: 'test' }];

  getAllUsers(): UserDto[] {
    return this.users;
  }

  getUserByUsername(username: string): UserDto | undefined {
    return this.users.find((user) => user.username === username);
  }
}

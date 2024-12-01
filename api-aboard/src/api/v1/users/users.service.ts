import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [{ id: 1, username: 'test' }];

  getAllUsers(): UserDto[] {
    return this.users;
  }

  getUser(username: string): UserDto {
    const currentUser = this.users.find((u) => u.username === username);
    if (!currentUser) {
      throw new NotFoundException(`User with ID ${username} not found.`);
    }
    return currentUser;
  }
}

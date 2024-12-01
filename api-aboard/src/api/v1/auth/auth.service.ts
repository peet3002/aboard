import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly users: UserDto[] = [{ id: 1, username: 'demo' }];

  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser(username: string): Promise<UserDto | null> {
    const user = await this.userService.getUserByUsername(username);
    return user ?? null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username);
    if (!user) {
      throw new HttpException(`User doesn't exist`, HttpStatus.NOT_FOUND);
    }

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './api/v1/auth/jwt-auth.guard';
@Controller('protected')
export class AppController {
  @UseGuards(JwtAuthGuard) // Protect this route with the JwtAuthGuard
  @Get()
  getProtected() {
    return 'This is a protected route';
  }
}

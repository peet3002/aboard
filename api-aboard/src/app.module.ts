import { Module } from '@nestjs/common';
import { AuthModule } from './api/v1/auth/auth.module';
import { UsersModule } from './api/v1/users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

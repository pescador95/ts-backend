import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './app/users/users.module';
import { HealthCheckModule } from './app/health/health.module';

@Module({
  imports: [ConfigModule.forRoot(),HealthCheckModule, UsersModule],
})
export class AppModule {}

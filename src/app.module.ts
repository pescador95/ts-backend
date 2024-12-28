import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './app/users/users.module';
import { HealthCheckModule } from './app/health/health.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './app/events/events.module';
import { AuthModule } from './shared/config/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './shared/config/role/role.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    HealthCheckModule,
    UsersModule,
    EventModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}

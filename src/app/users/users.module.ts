import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.services';
import { DatabaseModule } from '../../shared/config/database/postgres/postgres.module';
import { usersProviders } from './users.providers';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from 'src/shared/config/role/role.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}

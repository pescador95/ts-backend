/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.services';
import { DatabaseModule } from '../../shared/config/database/database.module';
import { usersProviders } from './users.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        ...usersProviders,
        UsersService],

})
export class UsersModule {}
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.config';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
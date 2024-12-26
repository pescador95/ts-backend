import { Module } from '@nestjs/common';
import { databaseProviders } from './postgres.config';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

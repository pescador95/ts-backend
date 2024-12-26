import { Module } from '@nestjs/common';
import { MongoDatabaseModule } from './mongo.config';

@Module({
  imports: [MongoDatabaseModule],
})
export class AppModule {}

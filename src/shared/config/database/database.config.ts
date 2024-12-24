/* eslint-disable prettier/prettier */
import { User } from '../../../app/users/users.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        database: process.env.DATABASE_DB || 'app_ts',
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
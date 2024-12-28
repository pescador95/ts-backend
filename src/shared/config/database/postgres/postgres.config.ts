import { User } from '../../../../app/users/users.entity';
import { DataSource } from 'typeorm';
import { UserRole } from '../../role/role.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB,
        entities: [User, UserRole],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

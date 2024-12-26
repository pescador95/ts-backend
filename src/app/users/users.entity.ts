import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birth: Date;

  @Column({ name: 'created_at' })
  createdAt?: Date;

  @Column()
  password: string;
}

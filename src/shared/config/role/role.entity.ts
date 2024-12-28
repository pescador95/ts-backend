import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../app/users/users.entity';
import { Role } from './role.enum';

@Entity({ name: 'role' })
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}

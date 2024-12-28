import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { UserRole } from '../../shared/config/role/role.entity';

export class UserDTO {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsDate()
  birth: Date;
  @IsString()
  password: string;
  @IsEnum(UserRole, { each: true })
  roles: UserRole[];
}

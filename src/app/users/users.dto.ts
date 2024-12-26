import { IsDate, IsNumber, IsString } from 'class-validator';

export class UserDTO {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsDate()
  birth: Date;
}

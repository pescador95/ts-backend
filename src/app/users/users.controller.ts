import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.services';
import { User } from './users.entity';
import { UserDTO } from './users.dto';
import { Roles } from '../decorators/roles.decorator';
import { AuthGuard } from 'src/shared/config/auth/auth.guard';
import { Role } from '../../shared/config/role/role.enum';

@Controller('users')
@Roles(Role.USER)
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<UserDTO[]> {
    return this.usersServices.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<UserDTO> {
    return this.usersServices.findById(params.id);
  }

  @Post()
  async create(@Body() user: User): Promise<UserDTO> {
    return this.usersServices.create(user);
  }

  @Put()
  async edit(@Body() user: User): Promise<UserDTO> {
    return this.usersServices.edit(user);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  async delete(@Param() params) {
    return this.usersServices.delete(params.id);
  }
}

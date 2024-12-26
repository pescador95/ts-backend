import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.services';
import { User } from './users.entity';
import { UserDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
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

  @Delete(':id')
  async delete(@Param() params) {
    return this.usersServices.delete(params.id);
  }
}

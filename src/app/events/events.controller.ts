import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './events.schema';

@Controller('events')
export class EventsController {
  constructor(private eventsServices: EventsService) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventsServices.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<Event> {
    return this.eventsServices.findById(params.id);
  }

  @Post()
  async create(@Body() event: Event): Promise<Event> {
    return this.eventsServices.create(event);
  }

  @Put()
  async edit(@Body() event: Event): Promise<Event> {
    return this.eventsServices.edit(event);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return this.eventsServices.delete(params.id);
  }
}

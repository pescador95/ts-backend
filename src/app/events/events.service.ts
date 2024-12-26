import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './events.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {}

  async findAll(): Promise<Event[]> {
    try {
      return await this.eventModel.find().exec();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findById(id: string): Promise<Event> {
    try {
      const event = await this.eventModel.findById(id).exec();
      if (!event) {
        throw new Error('No event found');
      }
      return event;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(event: Partial<Event>): Promise<Event> {
    try {
      const newEvent = new this.eventModel({
        ...event,
        createdAt: new Date(),
        id: uuidv4(),
      });
      return await newEvent.save();
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  async edit(event: Partial<Event>): Promise<Event> {
    try {
      const oldEvent = await this.findById(event.id);
      const updatedEvent = { ...oldEvent, ...event };
      const savedEvent = await this.eventModel
        .findByIdAndUpdate(event.id, updatedEvent, { new: true })
        .exec();

      if (!savedEvent) {
        throw new Error('No event found to update');
      }

      return savedEvent;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const event = await this.findById(id);
      await this.eventModel.findByIdAndDelete(event.id).exec();
    } catch (error) {
      throw new NotFoundException('No event found or already deleted');
    }
  }
}

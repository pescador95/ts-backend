import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ type: [String], default: [] })
  participants: string[];

  @Prop({
    type: String,
    enum: ['planned', 'ongoing', 'completed', 'canceled'],
    default: 'planned',
  })
  status: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);

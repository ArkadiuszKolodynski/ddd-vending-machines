import { IEvent } from '@nestjs/cqrs';
import { randomUUID } from 'node:crypto';

export interface IEventBase<T extends Record<string, unknown>> extends IEvent {
  eventId: string;
  eventType: string;
  timestamp: Date;
  aggregateId: string;
  aggregateType: string;
  payload: T;
}

export abstract class EventBase<T extends Record<string, unknown>> implements IEventBase<T> {
  public readonly eventId: string = randomUUID();
  public readonly eventType: string = this.constructor.name;
  public readonly timestamp: Date = new Date();
  public readonly aggregateId: string;
  public readonly aggregateType: string;
  public readonly payload: T;

  constructor({ aggregateId, aggregateType, payload }: { aggregateId: string; aggregateType: string; payload: T }) {
    this.aggregateId = aggregateId;
    this.aggregateType = aggregateType;
    this.payload = payload;
  }
}

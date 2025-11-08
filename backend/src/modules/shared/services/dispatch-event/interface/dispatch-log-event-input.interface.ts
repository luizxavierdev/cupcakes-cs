import { EventData } from './event-data.type';

export interface DispatchLogEventInput {
  extraData: string;
  resource: string;
  data: EventData;
  response?: unknown;
  message: string;
}

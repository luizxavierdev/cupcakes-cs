import { EventData } from './event-data.type';

export interface DispatchErrorEventInput {
  extraData: string;
  resource: string;
  data: EventData;
}

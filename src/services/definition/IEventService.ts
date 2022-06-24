import {IEventListEntry} from '@/models/EventModels';


export default interface IEventService {

  events(): Promise<IEventListEntry[]>;
}

import AxiosService from '@/services/AxiosService';
import IEventService from '@/services/definition/IEventService';
import {IEventListEntry} from '@/models/EventModels';
import Vue from 'vue';

export default class AxiosEventService extends AxiosService implements IEventService {

  public static readonly BASE_URL = '/notifications';

  protected defineBaseUrl(): string {
    return AxiosEventService.BASE_URL;
  }

  events(): Promise<IEventListEntry[]> {
    return Vue.$axios.get<IEventListEntry[]>(this.url(), {})
      .then(res => res.data);
  }

}

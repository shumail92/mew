import { Injectable, Provider } from '@angular/core';
import { EVENTS } from '../services/event-mock';
import { Event } from '../model/event';

@Injectable()
export class TimelineEventsService {
  private events: Event[] = [];

  constructor() {
  }

  getEvents() {
    let index = 1;
    for ( let event of EVENTS ) {
      let tmpEvent = new Event(index, event.title, event.description, new Date(event.date), event.images);
      this.events.push(tmpEvent);
      index++;
    }
    return this.events;
  }
}

import { Component, OnInit } from '@angular/core';
import { TimelineEventsService } from '../../services/events.service'
import { Event } from '../../model/event';

@Component({
  selector: 'sm-timeline',
  templateUrl: 'timeline.component.html',
  providers: [TimelineEventsService]
})
export class TimelineComponent {

  events: Event[];

  constructor(private eventsService: TimelineEventsService) {
    this.events = this.eventsService.getEvents();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/first';

@Component({
  selector: 'sm-timeline-event',
  templateUrl: 'timeline-event.component.html'
})
export class TimelineEventComponent implements OnInit {

  @Input() timelineEvent: any;
  @Input() bgColor: string;

  ngOnInit() {

  }

}

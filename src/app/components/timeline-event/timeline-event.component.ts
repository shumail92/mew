import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../model/event'

@Component({
  selector: 'sm-timeline-event',
  templateUrl: 'timeline-event.component.html'
})
export class TimelineEventComponent implements OnInit {

  @Input() timelineEvent: Event;
  @Input() direction: string;
  @Input() bgColor: string;
  // xaxa = 'images/mew/2015-04-10_1.jpg';
  ngOnInit() {
    console.log(this.direction);
  }

  getImageURL(img: string) {
    let backgroundCss = '{' + '\'background-image\'' + ': ' + '\'url(images/mew/' + img + ')\'' + '}';
    console.log(backgroundCss);
    return backgroundCss;
  }

}

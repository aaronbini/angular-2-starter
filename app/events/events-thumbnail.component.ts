import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'events-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal)</span>
      </div>
      <div>Price: {{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">Online Url: {{event?.onlineUrl}}</div>
      <button class="btn btn-primary" (click)="handleClickMe()">Handle Click</button>
    </div>
  `,
  styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .thumbnail { min-height: 250px; }
  `]
})

export class EventThumbnailComponent {
  @Input() event:IEvent
  @Output() eventClick: EventEmitter<any> = new EventEmitter<any>();
  //@Output() eventClick = new EventEmitter()

  handleClickMe() {
    this.eventClick.emit(this.event.name);
    this.eventClick.emit(this.eventClick.observers[0]);
    console.log('In Thumbnail component, Button Clicked!');
  }

  getStartTimeClass () {
    if (this.event && this.event.time === '8:00 am') {
      return [ 'green', 'bold' ]
    }
    return [];
  }
}
import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor:pointer }
  `]
})

export class EventDetailsComponent {
  
  constructor (private eventService:EventService, private route:ActivatedRoute) {}

  event:IEvent
  addMode:boolean
  filterBy:string = 'all'

  ngOnInit () {
    //the plus before this.route.snapshot means we are "casting" this to a number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession () {
    this.addMode = true;
  }

  saveNewSession (session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(session => session.id));
    session.id = nextId+1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession () {
    this.addMode = false;
  }
}
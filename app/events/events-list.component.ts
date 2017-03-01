import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

//this works too, all paths need to be relative to the index.html file
// import template from '/app/events/events-list.component.html';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr/>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events;">
          <events-thumbnail (eventClick)="handleEventClicked($event)" (eventClick)="handleSecondEventClicked($event)" [event]="event"></events-thumbnail>
        </div>
      </div>  
    </div>
  `
})

//@Injectable()
export class EventsListComponent implements OnInit {
  
  events: IEvent[]

  constructor (private eventService: EventService, private toasterService: ToastrService, private route: ActivatedRoute) {}

  ngOnInit () {
    //this becomes unecessary when we resolve the events in the route
    //subscribe registers handlers for the Observable which handles the emitted values
    //this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(event) {

    console.log('Event: ', event);
    this.toasterService.success('You\'re Signed up!', event)
  }

  handleSecondEventClicked(event) {
    console.log('Event 2: ', event);
  }

}
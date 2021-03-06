import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: 'app/events/create-event.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error :: -webkit-input-placeholder { color: #999; }
    .error :: -moz-placeholder { color: #999; }
    .error : -moz-placeholder { color: #999; }
    .error : ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent {

  isDirty: boolean = true
  //event:any

  constructor (private route:Router, private eventService:EventService) {}

  ngOnInit () {
    //this.event initialized here via call to api
  }

  saveEvent (formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.route.navigate(['/events']);
  }

  cancel() {
    this.route.navigate(['/events']);
  }

}
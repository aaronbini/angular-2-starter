"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_service_1 = require('./shared/event.service');
var toastr_service_1 = require('../common/toastr.service');
var router_1 = require('@angular/router');
//this works too, all paths need to be relative to the index.html file
// import template from '/app/events/events-list.component.html';
var EventsListComponent = (function () {
    function EventsListComponent(eventService, toasterService, route) {
        this.eventService = eventService;
        this.toasterService = toasterService;
        this.route = route;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        //this becomes unecessary when we resolve the events in the route
        //subscribe registers handlers for the Observable which handles the emitted values
        //this.eventService.getEvents().subscribe(events => this.events = events);
        this.events = this.route.snapshot.data['events'];
    };
    EventsListComponent.prototype.handleEventClicked = function (event) {
        console.log('Event: ', event);
        this.toasterService.success('You\'re Signed up!', event);
    };
    EventsListComponent.prototype.handleSecondEventClicked = function (event) {
        console.log('Event 2: ', event);
    };
    EventsListComponent = __decorate([
        core_1.Component({
            template: "\n    <div>\n      <h1>Upcoming Angular 2 Events</h1>\n      <hr/>\n      <div class=\"row\">\n        <div class=\"col-md-5\" *ngFor=\"let event of events;\">\n          <events-thumbnail (eventClick)=\"handleEventClicked($event)\" (eventClick)=\"handleSecondEventClicked($event)\" [event]=\"event\"></events-thumbnail>\n        </div>\n      </div>  \n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, toastr_service_1.ToastrService, router_1.ActivatedRoute])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map
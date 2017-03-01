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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        this.eventClick = new core_1.EventEmitter();
    }
    //@Output() eventClick = new EventEmitter()
    EventThumbnailComponent.prototype.handleClickMe = function () {
        this.eventClick.emit(this.event.name);
        this.eventClick.emit(this.eventClick.observers[0]);
        console.log('In Thumbnail component, Button Clicked!');
    };
    EventThumbnailComponent.prototype.getStartTimeClass = function () {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        }
        return [];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EventThumbnailComponent.prototype, "eventClick", void 0);
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'events-thumbnail',
            template: "\n    <div [routerLink]=\"['/events', event.id]\" class=\"well hoverwell thumbnail\">\n      <h2>{{event?.name}}</h2>\n      <div>Date: {{event?.date}}</div>\n      <div [ngClass]=\"getStartTimeClass()\" [ngSwitch]=\"event?.time\">\n        Time: {{event?.time}}\n        <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n        <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n        <span *ngSwitchDefault>(Normal)</span>\n      </div>\n      <div>Price: {{event?.price}}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{event?.location?.address}}</span>\n        <span class=\"pad-left\">{{event?.location?.city}}, {{event?.location?.country}}</span>\n      </div>\n      <div *ngIf=\"event?.onlineUrl\">Online Url: {{event?.onlineUrl}}</div>\n      <button class=\"btn btn-primary\" (click)=\"handleClickMe()\">Handle Click</button>\n    </div>\n  ",
            styles: ["\n    .green { color: #003300 !important; }\n    .bold { font-weight: bold; }\n    .pad-left { margin-left: 10px; }\n    .well div { color: #bbb; }\n    .thumbnail { min-height: 250px; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=events-thumbnail.component.js.map
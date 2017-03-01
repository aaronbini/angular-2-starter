import {Component, Input} from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <!-- This is equivalent to Angular 1 ng-transclude -->
    <!-- content put inside of opening and closing collapsible well tags will go here -->
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <div>
        <ng-content *ngIf="visible"select="[well-body]"></ng-content>
      </div>
    </div>
  `
})

export class CollapsibleWellComponent {
  @Input() title: string;
  visible: boolean = true;

  toggleContent () {
    this.visible = !this.visible;
  }

}
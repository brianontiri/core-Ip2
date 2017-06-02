import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>badilisha chakula</h1>
      <div>
        <label>fafanua chakula</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.description">
        <label>ongeza kiasi cha calories</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
        <button class="btn btn-info"(click)="doneClicked()">Done</button>
      </div>

    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

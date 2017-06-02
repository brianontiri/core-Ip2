import { Component } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'my-app',
  template: `
  <div class = "container-fluid    all">
  <h1>Meal-Tracker</h1>

  <new-meal
    (newMealSender)="addMeal($event)"
  ></new-meal>


  <meal-list
  [childMealList]="masterMealList"
  (clickSender)="showDetails($event)"
 ></meal-list>


 <edit-meal
  [childSelectedMeal]="selectedMeal"
  (doneClickedSender)="finishedEditing()"
></edit-meal>

  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [

  ];

  addMeal(newMealToAdd: Meal) {
    this.masterMealList.push(newMealToAdd);
  }
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}

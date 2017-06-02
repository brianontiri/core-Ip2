import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="10000">onyesha zote</option>
    <option value="500">chakula iliyo na calories za chini</option>
    <option value="500">chakula iliyo na calories ya juu</option>
</select>
    <div *ngFor="let currentMeal of childMealList | completeness:selectedCalories">
    <h3>jina ya chakula:{{ currentMeal.name }}</h3>
      <div class = "es">
      <p>ufafanuzi wake :{{currentMeal.description}}</p>
      <p> idadi ya Calories:{{currentMeal.calories}}</p>
      <button class = "btn btn-info" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      </div>
      </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: number = 500;
onChange(optionFromMenu) {
  this.selectedCalories = optionFromMenu;
  console.log(this.selectedCalories);
}
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}

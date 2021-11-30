import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe1','testing the recipe entry','https://images.unsplash.com/photo-1615582583508-3999ef308a38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'),
    new Recipe('Test Recipe2','testing the recipe entry','https://images.unsplash.com/photo-1615582583508-3999ef308a38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected( recipeSel:Recipe)
  {
    this.recipeWasSelected.emit(recipeSel);
  }

}

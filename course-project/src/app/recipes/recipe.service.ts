import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqzwLuQXuQug8Tqvc7jrzHVFGba-V1bm4gtWFPjMyE_Ufo2OR')
  ];

  getRecipes(){
      return this.recipes.slice();
  }

}
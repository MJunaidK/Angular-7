import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[]=[
        new Recipe(
          'Chilly Chicken',
          'Indians Favourite Dish',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqzwLuQXuQug8Tqvc7jrzHVFGba-V1bm4gtWFPjMyE_Ufo2OR',
          [new Ingredient('Meat', 1),
           new Ingredient('Masalas', 10) 
        ])
          
  ];

  getRecipes(){
      return this.recipes.slice();
  }

}
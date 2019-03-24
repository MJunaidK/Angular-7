import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';


export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();
  

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

  // addIngredientsToShoppingList(ingredients: Ingredient[]){
  //   this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  // }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deletRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
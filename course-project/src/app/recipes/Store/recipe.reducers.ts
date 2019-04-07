import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

export interface RecipeInterface{
    myrecipes: State
}

export interface State{
    recipes: Recipe[]
}

const initialState: State = {
    recipes:[
        new Recipe(
          'Chilly Chicken',
          'Indians Favourite Dish',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqzwLuQXuQug8Tqvc7jrzHVFGba-V1bm4gtWFPjMyE_Ufo2OR',
          [new Ingredient('Meat', 1),
           new Ingredient('Masalas', 10) 
        ])
          
  ]

};

export function recipeReducer(state = initialState, action){
    return state;
}
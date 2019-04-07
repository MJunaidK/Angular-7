import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as RecipeActions from './recipe.actions';

export interface FeatureState{
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

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions){
    switch(action.type){
        case(RecipeActions.SET_RECIPES):
            return {
                ...state, 
                recipes: [...action.payload]
            };
          case(RecipeActions.ADD_RECIPE):
              return {
                ...state,
                recipes: [...state.recipes, action.payload]
              }
          case(RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe= {
                ...recipe,
                ...action.payload.updateRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
              return{
                ...state,
                recipes: recipes
              }
          case (RecipeActions.DELETE_RECIPE):
              const oldRecipes = [...state.recipes];
              oldRecipes.splice(action.payload);
              return{
                  ...state,
                  recipes: oldRecipes
              }
          default: 
              return state;
    }
    return state;
}
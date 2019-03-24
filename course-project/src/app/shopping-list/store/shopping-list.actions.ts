import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGRDIENT';
export const ADD_INGRDIENTS = 'ADD_INGRDIENTS'; 

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
   
   constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGRDIENTS;
   
   constructor(public payload: Ingredient[]){}
}


export type ShoppingListActions = AddIngredient | AddIngredients;
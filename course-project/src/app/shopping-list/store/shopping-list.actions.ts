import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGRDIENT';

export class AddIngredient implements Action {
    readonly type: string = ADD_INGREDIENT;
   
   constructor(public payload: Ingredient){}
    

}

export type ShoppingListActions = AddIngredient;
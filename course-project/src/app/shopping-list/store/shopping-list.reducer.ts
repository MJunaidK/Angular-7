import * as ShoppingActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';

const initialState = {
    ingredients: [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes', 10)
    ]
}

export function shoppingListReducer(state = initialState, action: ShoppingActions.ShoppingListActions){

    switch(action.type){
        case ShoppingActions.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingActions.ADD_INGRDIENTS:
            return{
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingActions.UPDATE_INGREDIENT:
            const ingredient= state.ingredients[action.payload.index];
            const updatedIngredient= {  // copy all the properties of the old ingredient to updated in an immutable way
                ...ingredient, 
                ...action.payload.ingredient
            }
            const ingredients = [...state.ingredients];
            ingredients[action.payload.index] = updatedIngredient;
            return{
                ...state,
                ingredients: ingredients
            };
        case ShoppingActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            ingredients.slice(action.payload,1);
            return{
                ...state,
                ingredients: [...state.ingredients, ingredients]
            };            
        default:
            return state;    
    }
return state;
}
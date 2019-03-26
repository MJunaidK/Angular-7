import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';

// This service is not used as we are using NgStore for same.
export class ShoppingListService{

  ingredientsChanged =  new Subject<Ingredient[]>();  
  startedEditing =  new Subject<number>();

  private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
  ];

   public getIngredientsByIndex(index:number){
    return this.ingredients[index];
  }
  // public getIngredients(){
  //     return this.ingredients.slice();
  // }

  // public addIngredient(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

  public addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
    
}
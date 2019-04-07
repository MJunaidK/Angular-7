import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RecipeActions from '../Store/recipe.actions'
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects{

    @Effect()
    recipeFetch = this.action$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap((action: RecipeActions.FetchRecipes) => {
           return this.httpClient.get<Recipe[]>('http://ng-recipe-book.firebaseio.com/recipes.json',{
                observe:'body',
                responseType: 'json' 
            })
        }),
        map(
            (recipes) => {
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients']=[];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };
            } 

        )
        )

    constructor(private action$: Actions, private httpClient: HttpClient){}
}
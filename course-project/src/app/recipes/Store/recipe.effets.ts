import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RecipeActions from '../Store/recipe.actions'
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import * as fromRecipe from '../Store/recipe.reducers';
import { Store } from '@ngrx/store';

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

    @Effect({dispatch: false})
    recipeStore = this.action$.pipe(
        ofType(RecipeActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action,state]) => {
            const req = new HttpRequest('PUT','http://ng-recipe-book.firebaseio.com/recipes.json', 
            state.recipes,{reportProgress: true, params: new HttpParams().set('auth','token')});
            return this.httpClient.request(req);
        }
    )
    )

    constructor(private action$: Actions, private httpClient: HttpClient,private store: Store<fromRecipe.FeatureState>){}

    
}
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromRecipe from '../store/recipe.reducers';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as RecipeActions from '../Store/recipe.actions';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,
                private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id= +params['id'];
        this.recipeState = this.store.select('recipes');
      }
    );
  }
  
  onAddToShoppingList(){
    this.store.select('recipes').pipe(
        take(1)).subscribe((recipeState: fromRecipe.State)=> {
          this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients))
        })
    //this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
   // this.router.navigate(['../', this.id,'edit'],{relativeTo: this.route});
  }

  onDeletRecipe(){
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.recipeService.deletRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}

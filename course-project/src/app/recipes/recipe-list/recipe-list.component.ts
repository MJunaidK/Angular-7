import { Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Recipe } from '../recipe.model';
import { Subscription, Observable } from 'rxjs';
import * as fromRecipe from '../store/recipe.reducers';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeState: Observable<fromRecipe.State>;

  constructor(private router: Router, private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {

    this.recipeState = this.store.select('recipes')

  //  this.subscription=this.recipeService.recipesChanged.subscribe(
  //       (recipes: Recipe[]) => {
  //         this.recipes = recipes;
  //       }
  //   );
  //   this.recipes= this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}

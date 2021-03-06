import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  //private subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription= this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // )
  }
  
// ngOnDestroy(){
//   this.subscription.unsubscribe();
// }

onEditItem(index: number){
  this.store.dispatch(new ShoppingListActions.StartEdit(index));
}
}

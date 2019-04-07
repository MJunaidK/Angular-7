import {Component, OnInit} from '@angular/core'
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.action';
import * as RecipeActions from '../../recipes/Store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

    authState: Observable<fromAuth.State>;

    constructor(private dataStorageService: DataStorageService,
                private store: Store<fromApp.AppState>){}

    ngOnInit(){
        this.authState = this.store.select('auth');
    }

    onSaveData(){
        this.store.dispatch(new RecipeActions.StoreRecipes());
        // this.dataStorageService.storeRecipes()
        // .subscribe(
        //     (response: HttpEvent<Object>) => {
        //         console.log(response);
        //         console.log(response.type === HttpEventType.Sent);
        //     }
        // )
    }

    onFetchData(){
        //this.dataStorageService.getRecipes();
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }

    onLogout(){
        this.store.dispatch(new AuthActions.Logout());
    }

}
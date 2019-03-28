import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { AppReducers } from './store/app.reducers';



@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,  
    SharedModule,      
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(AppReducers)
  ],
  providers: [ShoppingListService, RecipeService,DataStorageService, AuthService,AuthGuard,
               {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true},
               {provide: HTTP_INTERCEPTORS,useClass: LoggingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

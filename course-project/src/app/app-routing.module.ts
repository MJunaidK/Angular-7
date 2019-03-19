import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canActivate: [AuthGuard]},
    { path: 'shopping-list' , component: ShoppingListComponent}
    ]

// preloadingStrategy: PreloadAllModules as the name implies pre-load is all lazy loaded modules.
// After the app has been loaded.So not at the point of time you load the app initially but once it runs.

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{}
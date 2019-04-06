import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as AuthActions from './auth.action';

@Injectable()
export class AuthEffects{
    @Effect()
    authSignup = this.action$.pipe(
        ofType(AuthActions.TRY_SIGNUP))

constructor(private action$: Actions){

}

}
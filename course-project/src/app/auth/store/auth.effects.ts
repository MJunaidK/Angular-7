import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as AuthActions from './auth.action';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import {from} from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects{
    @Effect()
    authSignup = this.action$.pipe(
        ofType(AuthActions.TRY_SIGNUP),
        map((action: AuthActions.TrySignUp) => {
            return action.payLoad;
        }),
        switchMap((authData: {username: string, password: string}) => {
          //  return from(firebase.auth().createUserWithEmailAndPassword(authData.username,authData.password));
          return 'created';
        }),
        switchMap(() => {
            //return from(firebase.auth().currentUser.getIdToken())
            return 'hduehfehfeuh'
        }),
        mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.SIGNUP
                },{
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ] 
        })
        )

@Effect()
authSignin = this.action$.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    map((action: AuthActions.TrySignUp) => {
        return action.payLoad;
    }),
    switchMap((authData: {username: string, password: string}) => {
      //  return from(firebase.auth().signInWithEmailAndPassword(authData.username,authData.password));
      return 'created';
    }),
    switchMap(() => {
        //return from(firebase.auth().currentUser.getIdToken())
        return 'hduehfehfeuh'
    }),
    mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
            {
                type: AuthActions.SIGNIN
            },{
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ] 
    })
    )





constructor(private action$: Actions, private router: Router){

}



}
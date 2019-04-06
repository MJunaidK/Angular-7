import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as  fromApp from '../store/app.reducers'; // Use reducers to inject store App state
import * as AuthActions from './store/auth.action';// Use actions to dispatch new action object 

@Injectable()
export class AuthService {
  //  token: string;



    constructor(private router: Router, private store: Store<fromApp.AppState>){
       
    }

    signUpUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(
                user => {
                    this.store.dispatch(new AuthActions.Signup());
                }
            )
            .catch(
                error => console.log(error)
            )
    }


    signInUser(email: string, password: string){

        // Adding below two lines as firebase is not set up
       // this.token ="fgewgfyu";
       this.store.dispatch(new AuthActions.SetToken('hjfgegfeuwr'));
       this.store.dispatch(new AuthActions.Signin());
        this.router.navigate(['/']);
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(response => {
                   this.store.dispatch(new AuthActions.Signin());
                   this.router.navigate(['/']);
                   firebase.auth().currentUser.getIdToken()
                     .then( 
                         (token: string) => {
                             this.store.dispatch(new AuthActions.SetToken(token));
                         }
                        )
                    }
            )
            .catch(
                error => {
                     console.log(error)
                } 
            );
    }

    logout(){
        firebase.auth().signOut();
        this.store.dispatch(new AuthActions.Logout());
    }

    // getToken(){
    //     firebase.auth().currentUser.getIdToken()
    //     .then(
    //          (token: string) =>this.token = token
    //     );
    //  return this.token;
    // }

    // isAutheticated(){
    //     return this.token !=null ;
    // }
}
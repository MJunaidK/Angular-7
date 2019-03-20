import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router){

    }

    signUpUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((resolve) => {
                console.log('User Created')
            })
            .catch(
                error => console.log(error)
            )
    }


    signInUser(email: string, password: string){

        // Adding below two lines as firebase is not set up
        this.token ="fgewgfyu";
        this.router.navigate(['/']);
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(response => {
                   this.router.navigate(['/']);
                   firebase.auth().currentUser.getIdToken()
                     .then( 
                         (token: string) => this.token = token
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
        this.token = null;
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
             (token: string) =>this.token = token
        );
     return this.token;
    }

    isAutheticated(){
        return this.token !=null ;
    }
}
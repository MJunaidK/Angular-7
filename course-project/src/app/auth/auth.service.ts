import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
    token: string;
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
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(response => {
                   firebase.auth().currentUser.getIdToken()
                     .then( 
                         (token: string) => this.token = token
                        )
                    }
            )
            .catch(
                error => {
                    this.token ="fgewgfyu";
                    console.log(error)
                } 
            );
    }

    getToken(){
        return firebase.auth().currentUser.getIdToken()
        .then(
             (token: string) =>this.token = token
        );
     return this.token;
    }

    isAutheticated(){
        return this.token !=null ;
    }
}
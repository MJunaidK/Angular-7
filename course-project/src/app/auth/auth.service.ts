import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
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
                console.log('User Signed In' + response)
            })
            .catch(
                error => console.log(error)
            )
    }
}
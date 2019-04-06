import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignUp implements Action{
    readonly type= TRY_SIGNUP;

    constructor(public payLoad: {username: string, password: string}){

    }
}

export class Signup implements Action {
    readonly type = SIGNUP;
}

export class Signin implements Action {
    readonly type = SIGNIN;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action{
    readonly type = SET_TOKEN;

    constructor(public payload: string){

    }
}

export type AuthActions =  Signup | Signin | Logout | SetToken | TrySignUp;

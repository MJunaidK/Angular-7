import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServersService {

    constructor(private http: Http){}

    storeServers(servers: any[]){
        return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',servers);
    }
}
import { Injectable } from '@angular/core';
import {Http,Headers, Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ServersService {

    constructor(private http: Http){}

    // storeServers(servers: any[]){
    //     const headers = new Headers({'Content-Type': 'application/json'})
    //     return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',servers, {headers: headers} );
    // }


     storeServers(servers: any[]){
         const headers = new Headers({'Content-Type': 'application/json'})
         return this.http.put('https://udemy-ng-http.firebaseio.com/data.json',servers, {headers: headers} );
     }

    getServers(){
        return this.http.get('https://udemy-ng-http.firebaseio.com/data.json')
        .pipe(
            map((response: Response) => {
                const data = response.json();
                return data;
            }
           )
        );
    }
}
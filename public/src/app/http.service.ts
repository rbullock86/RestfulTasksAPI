import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getAll();
    this.getOne('5b9725ba494035714892852f');
  }
  getAll(){
    // our http response is an Observable, store it in a variable
    let tempObs = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObs.subscribe(data => console.log("Got all of our tasks!", data));
  }
  getOne(id: string){
    let tempObs = this._http.get('/tasks/' + id )
    tempObs.subscribe(data => console.log("Got one task!", data));
  }
}

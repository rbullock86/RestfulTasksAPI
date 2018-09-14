import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getOneTask(id: String){
    return this._http.get('/tasks/' + id );
  }
  makeTask(newTask){
    return this._http.post('/tasks', newTask);
  }
  editTask(id: String, editTask){
    return this._http.put('/tasks/' + id, editTask);
  }
  deleteTask(id: String){
    return this._http.delete('/tasks/' + id);
  }
}

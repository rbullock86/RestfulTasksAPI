import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  alltasks;
  onetask;
  newtask: any;
  edittask:any;
  showEdit: boolean;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newtask = { title: "", description: ""};
    this.edittask = { title: "", description: ""};
    this.showEdit = false;
  }

  getTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Data:", data);
      this.alltasks = data;
    })
  }

  getOneTask(id: String) {
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      console.log("Data:", data);
      this.onetask = data;
    })
  }

  makeTask() {
    let observable = this._httpService.makeTask(this.newtask);
    observable.subscribe(data => {
      console.log("Data:", data);
      this.newtask = {title: "", description: ""};
    })
    this.getTasks();
  }

  GetTasksButtonClick(): void { 
    console.log(`Click event is working`);
    this.getTasks();
  }
  GetOneTaskButtonClick(id: String): void { 
    console.log(`Click event is working with num param: ${id}`);
    this.getOneTask(id);
  }

  editToggle(id: String): void {
    this.showEdit = !this.showEdit;
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      this.edittask = data;
    })
  }

  editTask(): void {
    let observable = this._httpService.editTask(this.onetask._id, this.edittask);
    observable.subscribe(data => {
      console.log("Data:", data);
    })
    this.edittask = {title: "", description: ""};
    this.showEdit = !this.showEdit;
    this.onetask = undefined;
    this.getTasks();
  }

  deleteTask(): void {
    let observable = this._httpService.deleteTask(this.onetask._id);
    observable.subscribe(data=> {
      console.log("Data:", data);
      this.edittask = {title: "", description: ""};
    })
    this.showEdit = false;
    this.onetask = undefined;
    this.getTasks();
  }

  onButtonClickParams(num: Number, str: String): void { 
      console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void { 
      console.log(`Click event is working with event: ${event}`);
  }
}

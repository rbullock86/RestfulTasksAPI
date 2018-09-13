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
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    // this.getTasks();
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

  GetTasksButtonClick(): void { 
    console.log(`Click event is working`);
    this.getTasks();
  }
  GetOneTaskButtonClick(id: String): void { 
    console.log(`Click event is working with num param: ${id}`);
    this.getOneTask(id);
  }
  onButtonClickParams(num: Number, str: String): void { 
      console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void { 
      console.log(`Click event is working with event: ${event}`);
  }
}

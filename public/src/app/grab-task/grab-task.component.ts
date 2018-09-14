import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grab-task',
  templateUrl: './grab-task.component.html',
  styleUrls: ['./grab-task.component.css']
})
export class GrabTaskComponent implements OnInit {
  @Input() showOneTask: any;

  
  constructor() { }

  ngOnInit() { }

}

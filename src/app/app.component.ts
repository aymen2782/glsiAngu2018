import { Component } from '@angular/core';
import {ToDo2Service} from "./to-do2.service";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tekups works! 2';

  constructor(private todoService : TodoService){

  }
  getTodos(){
     this.todoService.log();
  }
}


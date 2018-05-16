import { Injectable } from '@angular/core';
import {Todo} from "./Model/Todo";

@Injectable()
export class TodoService {


  constructor() {
    this.todoList = [
      new Todo('lundi','Angular')
    ]
  }

  private todoList : Todo[];


  getTodos(){
    return this.todoList;
  }

  log(){
    console.log(this.todoList);
  }

  logImHere(){
    console.log('je suis le service todoService');
  }

  addTodo(todo : Todo){
    this.todoList.push(todo);
  }

  deleteTodo(todo : Todo){
   console.log('delete TODO in service');
    var index = this.todoList.indexOf(todo, 0);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {Todo} from "../Model/Todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [TodoService]
})
export class TodolistComponent implements OnInit {

  todos : Todo [];
  constructor(private todoService : TodoService) { }

  add = false;
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  showAddTodo(){
    this.add=true;
  }

  addTodo(cle ,  valeur){
    this.todoService.addTodo(new Todo(cle,valeur));
    this.add = false;
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo);
  }
}

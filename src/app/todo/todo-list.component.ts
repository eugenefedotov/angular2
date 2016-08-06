import { Component } from '@angular/core';
import { ToDoItem } from './todo-item.component';
import { ToDo } from './todo';

@Component({
  selector: 'todo-list',
  template: require('./todo-list.component.html'),
  styles: [
    require('./todo-list.component.css')
  ],
  directives: [ToDoItem]
})

export class ToDoList {
  todos: ToDo[];

  constructor() {
    this.todos = [];
  }

  addToDo(input: HTMLInputElement) {
    let title = input.value;
    if(title) {
      this.todos.push(new ToDo(title));
    }
    input.value = '';
  }
}

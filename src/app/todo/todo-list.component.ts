import { Component } from '@angular/core';
import { ToDoItem } from './todo-item.component'

@Component({
  selector: 'todo-list',
  template: require('./todo-list.component.html'),
  styles: [
    require('./todo-list.component.css')
  ],
  directives: [ToDoItem]
})

export class ToDoList {
  todos: string[];

  constructor() {
    this.todos = [];
  }

  addToDo(input: HTMLInputElement) {
    let title = input.value;
    if(title) {
      this.todos.push(title);
    }
    input.value = '';
  }
}

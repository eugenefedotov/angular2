import { Component } from '@angular/core';
import { ToDoItemsComponent } from './todo-items.component'

@Component({
  selector: 'todo-list',
  template: require('./todo-list.component.html'),
  styles: [
    require('./todo-list.component.css')
  ],
  directives: [ToDoItemsComponent]
})

export class ToDoListComponent {
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

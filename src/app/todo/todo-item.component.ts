import { Component, Input } from '@angular/core';
import { ToDo } from './todo';

@Component({
  selector: 'todo-item',
  template: require('./todo-item.component.html'),
  styles: [
    require('./todo-item.component.css')
  ]
})

export class ToDoItem {
  @Input() todo: ToDo;

  toggleDone() {
    this.todo.done = !this.todo.done;
  }
}

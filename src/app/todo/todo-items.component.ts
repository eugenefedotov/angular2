import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-items',
  template: require('./todo-items.component.html'),
  styles: [
    require('./todo-items.component.css')
  ]
})

export class ToDoItemsComponent {
  @Input() todos: string[];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: require('./todo-item.component.html'),
  styles: [
    require('./todo-item.component.css')
  ]
})

export class ToDoItem {
  @Input() todo: string[];
}

import { Component } from '@angular/core';
import { ToDoList } from './todo/todo-list.component'
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.css')
  ],
  directives: [ToDoList]
})
export class AppComponent {

  title: string;

  constructor() {
    this.title = 'Angular2 and WebPack ToDo Application';
  }
}

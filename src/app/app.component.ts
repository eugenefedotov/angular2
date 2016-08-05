import { Component } from '@angular/core';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.css')
  ]
})
export class AppComponent {

  title: string;

  constructor() {
    this.title = 'Angular2 and WebPack ToDo Application';
  }
}

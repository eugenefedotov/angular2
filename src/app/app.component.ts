import { Component } from '@angular/core';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  template: require('../public/app.component.html'),
  styles: [
    String(require('../styles/app.component.css'))
  ]
})
export class AppComponent {

  title: string;

  constructor() {
    this.title = 'Angular2 and WebPack ToDo Application';
  }
}

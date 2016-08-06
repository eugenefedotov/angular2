export class ToDo {
  title: string;
  done: boolean;

  constructor(title: string) {
    this.title = title;
    this.done = false;
  }
}

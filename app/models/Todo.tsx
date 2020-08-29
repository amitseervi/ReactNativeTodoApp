class Todo {
  readonly id: string;
  readonly title: string;

  constructor(title: string) {
    this.id = Math.random().toString();
    this.title = title.trim();
  }
}

export default Todo;

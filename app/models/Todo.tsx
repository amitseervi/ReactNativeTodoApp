import uuid from 'react-native-uuid';

class Todo {
  readonly id: string;
  readonly title: string;

  constructor(title: string) {
    this.id = uuid.v4();
    this.title = title;
  }
}

export default Todo;

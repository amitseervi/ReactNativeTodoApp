import Todo from '../models/Todo';

export type TodoListState = {
  activeTodoList: Todo[];
  completedTodoList: Todo[];
};

export const INITIAL_TODO_LIST_STATE: TodoListState = {
  activeTodoList: [],
  completedTodoList: [],
};

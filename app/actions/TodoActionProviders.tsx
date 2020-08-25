import Todo from '../models/Todo';

export const ActionAddTodo = (title: string) => {
  return {
    item: new Todo(title),
    type: 'ADD_TODO',
  };
};

export const ActionDeleteActiveTodo = (id: string) => {
  return {
    id: id,
    type: 'DELETE_ACTIVE_TODO',
  };
};

export const ActionDeleteCompletedTodo = (id: string) => {
  return {
    id: id,
    type: 'DELETE_COMPLETED_TODO',
  };
};

export const ActionCompleteTodo = (id: string) => {
  return {
    id: id,
    type: 'COMPLETE_TODO',
  };
};

export type TodoActionType = ReturnType<typeof ActionAddTodo> &
  ReturnType<typeof ActionDeleteActiveTodo> &
  ReturnType<typeof ActionDeleteCompletedTodo> &
  ReturnType<typeof ActionCompleteTodo>;

export const EmptyAction: TodoActionType = {
  id: '',
  item: new Todo(''),
  type: '',
};

import Todo from '../models/Todo';

export const ActionAddTodo = (title: string) => {
  return {
    item: new Todo(title),
    type: 'ADD_TODO',
    id: '',
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

export const ActionMoveBackToPending = (id: string) => {
  return {
    id: id,
    type: 'MOVE_BACK_TO_PENDING',
  };
};

export type TodoActionType = {
  id: string;
  type: string;
  item: Todo | undefined;
};

export const EmptyAction: TodoActionType = {
  id: '',
  item: new Todo(''),
  type: '',
};

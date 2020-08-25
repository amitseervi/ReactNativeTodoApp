import Todo from '../models/Todo';

export interface TodoListProps {
  activeTodoList: Todo[];
  completedTodoList: Todo[];
  onAddTodoClick: (title: string) => void;
  onActiveTodoDeleteClick: (id: string) => void;
  onTodoCompleted: (id: string) => void;
  onCompletedTodoDeleteClick: (id: string) => void;
}

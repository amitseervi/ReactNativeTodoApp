import {Dispatch} from 'react';
import {
  TodoActionType,
  ActionAddTodo,
  EmptyAction,
  ActionDeleteActiveTodo,
  ActionDeleteCompletedTodo,
  ActionCompleteTodo,
} from '../actions/TodoActionProviders';
import {TodoListState} from '../states/TodoStates';
import {connect, ConnectedProps} from 'react-redux';
import ActiveTodoListView from '../components/ActiveTodoList';
import CompletedTodoListView from '../components/CompletedTodoList';

const mapDispatchToProps = (dispatch: Dispatch<TodoActionType>) => ({
  onAdd: (title: string) => {
    console.log('On add' + title);
    dispatch({
      ...EmptyAction,
      ...ActionAddTodo(title),
    });
  },
  deleteActive: (id: string) => {
    dispatch({
      ...EmptyAction,
      ...ActionDeleteActiveTodo(id),
    });
  },
  deleteCompleted: (id: string) => {
    dispatch({
      ...EmptyAction,
      ...ActionDeleteCompletedTodo(id),
    });
  },
  completeTodo: (id: string) => {
    dispatch({
      ...EmptyAction,
      ...ActionCompleteTodo(id),
    });
  },
});

const mapStateToProps = (state: TodoListState) => ({
  activeTodoList: state.activeTodoList,
  completedTodoList: state.completedTodoList,
});
const connector = connect(mapStateToProps, mapDispatchToProps);

export type TodoListProps = ConnectedProps<typeof connector>;

export const ActiveTodoList = connector(ActiveTodoListView);
export const CompletedTodoList = connector(CompletedTodoListView);

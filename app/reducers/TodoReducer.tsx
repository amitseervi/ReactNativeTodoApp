import {INITIAL_TODO_LIST_STATE, TodoListState} from '../states/TodoStates';
import {TodoActionType} from '../actions/TodoActionProviders';

const TodoReducer = (
  state: TodoListState = INITIAL_TODO_LIST_STATE,
  action: TodoActionType,
): TodoListState => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        activeTodoList: [...state.activeTodoList, action.item],
      };
    }

    case 'DELETE_ACTIVE_TODO': {
      return {
        ...state,
        activeTodoList: state.activeTodoList.filter((item) => {
          item.id !== action.id;
        }),
      };
    }
    case 'DELETE_COMPLETED_TODO': {
      return {
        ...state,
        completedTodoList: state.completedTodoList.filter((item) => {
          item.id !== action.id;
        }),
      };
    }

    case 'COMPLETE_TODO': {
      const movedItem = state.activeTodoList.find((item) => {
        item.id === action.id;
      });
      if (movedItem) {
        return {
          completedTodoList: [...state.completedTodoList, movedItem],
          activeTodoList: state.activeTodoList.filter((item) => {
            item.id !== action.id;
          }),
        };
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};

export default TodoReducer;

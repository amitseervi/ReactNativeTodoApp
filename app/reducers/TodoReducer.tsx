import {INITIAL_TODO_LIST_STATE, TodoListState} from '../states/TodoStates';
import {TodoActionType} from '../actions/TodoActionProviders';

const TodoReducer = (
  state: TodoListState = INITIAL_TODO_LIST_STATE,
  action: TodoActionType,
): TodoListState => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (action.item && action.item.title.length > 0) {
        return {
          ...state,
          activeTodoList: [...state.activeTodoList, action.item],
        };
      } else {
        return state;
      }
    }

    case 'DELETE_ACTIVE_TODO': {
      console.log('Handling delete active todo');
      return {
        ...state,
        activeTodoList: state.activeTodoList.filter((item) => {
          return item.id !== action.id;
        }),
      };
    }
    case 'DELETE_COMPLETED_TODO': {
      return {
        ...state,
        completedTodoList: state.completedTodoList.filter(
          (item) => item.id !== action.id,
        ),
      };
    }

    case 'COMPLETE_TODO': {
      console.log('Handling complete todo');
      const movedItem = state.activeTodoList.find((item) => {
        return item.id === action.id;
      });
      if (movedItem) {
        return {
          completedTodoList: [...state.completedTodoList, movedItem],
          activeTodoList: state.activeTodoList.filter((item) => {
            return item.id !== action.id;
          }),
        };
      } else {
        return state;
      }
    }
    case 'MOVE_BACK_TO_PENDING': {
      const movedItem = state.completedTodoList.find((item) => {
        return item.id === action.id;
      });
      if (movedItem) {
        return {
          activeTodoList: [...state.activeTodoList, movedItem],
          completedTodoList: state.completedTodoList.filter((item) => {
            return item.id !== action.id;
          }),
        };
      } else {
        return state;
      }
    }
    default: {
      console.log('Handling default');
      return state;
    }
  }
};

export default TodoReducer;

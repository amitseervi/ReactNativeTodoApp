import {createStore} from 'redux';
import TodoReducer from '../reducers/TodoReducer';

const TodoListStore = createStore(TodoReducer);

export default TodoListStore;

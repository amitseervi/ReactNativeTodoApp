import React from 'react';
import {Provider} from 'react-redux';
import TodoListStore from './app/store/TodoListStore';
import ActiveTodoList from './app/containers/ActiveTodoListContainer';

const App = () => {
  return (
    <Provider store={TodoListStore}>
      <ActiveTodoList />
    </Provider>
  );
};

export default App;

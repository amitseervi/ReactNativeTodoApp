import React from 'react';
import {Provider} from 'react-redux';
import TodoListStore from './app/store/TodoListStore';
import BottomBarContainer from './app/components/BottomBarContainer';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={TodoListStore}>
      <NavigationContainer>
        <BottomBarContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

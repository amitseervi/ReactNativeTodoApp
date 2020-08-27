import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {
  ActiveTodoList,
  CompletedTodoList,
} from '../containers/TodoListContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type Tab = {
  key: string;
  icon: string;
  label: string;
  barColor: string;
  pressColor: string;
};

const Tab = createBottomTabNavigator();

export default class BottomBarContainer extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="active" component={ActiveTodoList} />
        <Tab.Screen name="complete" component={CompletedTodoList} />
      </Tab.Navigator>
    );
  }
}

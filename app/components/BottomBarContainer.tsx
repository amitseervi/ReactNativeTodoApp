import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ActiveTodoList,
  CompletedTodoList,
} from '../containers/TodoListContainer';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

type Tab = {
  key: string;
  icon: string;
  label: string;
  barColor: string;
  pressColor: string;
};

const Tab = createBottomTabNavigator();

export default class BottomBarContainer extends React.Component {
  private myScreenOptions = (routeName: string): BottomTabNavigationOptions => {
    return {
      title: 'Hello',
      tabBarLabel: 'Test',
      tabBarIcon: (props: {focused: boolean; color: string; size: number}) => {
        switch (routeName) {
          case 'complete': {
            return (
              <Ionicons
                name="checkmark-done"
                size={props.size}
                color={props.color}
              />
            );
          }
          default: {
            return (
              <Ionicons name="list" size={props.size} color={props.color} />
            );
          }
        }
      },
    };
  };
  render() {
    return (
      <Tab.Navigator
        lazy={true}
        backBehavior="history"
        screenOptions={(props: {
          route: {
            name: string;
          };
        }) => this.myScreenOptions(props.route.name)}>
        <Tab.Screen name="active" component={ActiveTodoList} />
        <Tab.Screen name="complete" component={CompletedTodoList} />
      </Tab.Navigator>
    );
  }
}

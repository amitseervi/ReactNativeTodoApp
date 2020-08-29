import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ActiveTodoList,
  CompletedTodoList,
} from '../containers/TodoListContainer';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import {LabelPosition} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

type Tab = {
  key: string;
  icon: string;
  label: string;
  barColor: string;
  pressColor: string;
};

const Tab = createBottomTabNavigator();

export default class BottomBarContainer extends React.Component {
  private tabTitle = (routeName: string) => {
    switch (routeName) {
      case 'complete': {
        return 'Completed';
      }
      default:
        return 'Todo';
    }
  };
  private myScreenOptions = (routeName: string): BottomTabNavigationOptions => {
    return {
      title: this.tabTitle(routeName),
      tabBarLabel: (props: {
        focused: boolean;
        color: string;
        position: LabelPosition;
      }) => {
        if (!props.focused) {
          return <View />;
        } else {
          return (
            <Text style={{color: 'white'}}>{this.tabTitle(routeName)}</Text>
          );
        }
      },
      tabBarIcon: (props: {focused: boolean; color: string; size: number}) => {
        switch (routeName) {
          case 'complete': {
            return (
              <Ionicons
                name="checkmark-done"
                size={props.focused ? props.size + 4 : props.size}
                color="#2181ff"
              />
            );
          }
          default: {
            return (
              <Ionicons
                name="list"
                size={props.focused ? props.size + 4 : props.size}
                color="#ff3421"
              />
            );
          }
        }
      },
    };
  };

  private myTabBarOptions: BottomTabBarOptions = {
    activeBackgroundColor: 'black',
    inactiveBackgroundColor: '#333333',
    activeTintColor: '#FFFFFF',
    labelStyle: {
      color: '#FFFFFF',
      fontSize: 14,
    },
    iconStyle: {
      padding: 1,
    },
    tabStyle: {
      padding: 2,
    },
  };
  render() {
    return (
      <Tab.Navigator
        lazy={false}
        tabBarOptions={this.myTabBarOptions}
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

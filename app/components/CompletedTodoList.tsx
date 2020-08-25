import {TodoListProps} from '../states/TodoProps';
import {View, Text, Button} from 'react-native';

export const CompletedTodoList = (props: TodoListProps) => {
  const React = require('react');
  return (
    <View>
      <Button
        title="Add"
        onPress={() => {
          props.onAddTodoClick('Test');
        }}
      />
      <View>
        {props.completedTodoList.map((item) => {
          <Text>{item.title}</Text>;
        })}
      </View>
    </View>
  );
};

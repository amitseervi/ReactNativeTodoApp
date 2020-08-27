import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Todo from '../models/Todo';
import {TodoListProps} from '../containers/TodoListContainer';
import InputTodoComponent from './InputTodoComponent';
type ActiveTodoListState = {};
export default class ActiveTodoListView extends React.Component<
  TodoListProps,
  ActiveTodoListState
> {
  private renderItem = (item: Todo) => {
    return (
      <View style={styles.rowItemContainer}>
        <Text style={styles.rowItemTitle}>{item.title}</Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <InputTodoComponent
          clearTextOnFocus={true}
          maxLength={200}
          onSubmitText={this.props.onAdd}
          placeholderColor="#345323"
          placeholderText="Add Todo Item"
          selectionColor="#457853"
          underlineColorAndroid="#094252"
        />
        <FlatList
          data={this.props.activeTodoList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowItemContainer: {
    backgroundColor: '#111111',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 2,
  },
  rowItemTitle: {
    color: '#ffffff',
    fontSize: 20,
  },
});

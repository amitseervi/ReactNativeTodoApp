import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Todo from '../models/Todo';
import {TodoListProps} from '../containers/TodoListContainer';
type CompletedTodoListState = {};
export default class CompletedTodoListView extends React.Component<
  TodoListProps,
  CompletedTodoListState
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
        <FlatList
          data={this.props.completedTodoList}
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

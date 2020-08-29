import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Todo from '../models/Todo';
import AppBar from './AppBar';
import {TodoListProps} from '../containers/TodoListContainer';
type CompletedTodoListState = {};
export default class CompletedTodoListView extends React.Component<
  TodoListProps,
  CompletedTodoListState
> {
  private renderItem = (
    item: Todo,
    markAsPending: (id: string) => void,
    deleteTodo: (id: string) => void,
  ) => {
    return (
      <View style={styles.rowItemContainer}>
        <Text style={styles.rowItemTitle}>{item.title}</Text>
        <View style={styles.rowItemActions}>
          <TouchableOpacity onPress={() => markAsPending(item.id)}>
            <Text
              style={[
                styles.rowItemActionsText,
                styles.rowItemActionsTextPositive,
              ]}>
              Undone
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Text
              style={[
                styles.rowItemActionsText,
                styles.rowItemActionsTextNegative,
              ]}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <AppBar title="Todo List" subtitle="Completed" />
        <FlatList
          data={this.props.completedTodoList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
            this.renderItem(
              item,
              this.props.moveBackToTodo,
              this.props.deleteCompleted,
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowItemContainer: {
    backgroundColor: '#4a4a4a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 8,
  },
  rowItemActions: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  rowItemTitle: {
    color: '#ffffff',
    fontSize: 16,
  },
  rowItemActionsText: {
    fontSize: 14,
    padding: 8,
    color: '#ffffff',
    borderRadius: 8,
  },
  rowItemActionsTextNegative: {
    backgroundColor: '#eb4034',
  },
  rowItemActionsTextPositive: {
    backgroundColor: '#24a2f0',
  },
});

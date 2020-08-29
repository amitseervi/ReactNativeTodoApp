import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Todo from '../models/Todo';
import {TodoListProps} from '../containers/TodoListContainer';
import InputTodoComponent from './InputTodoComponent';
import AppBar from './AppBar';
type ActiveTodoListState = {};
export default class ActiveTodoListView extends React.Component<
  TodoListProps,
  ActiveTodoListState
> {
  private renderItem = (
    item: Todo,
    completeTodo: (id: string) => void,
    deleteTodo: (id: string) => void,
  ) => {
    return (
      <View style={styles.rowItemContainer}>
        <Text style={styles.rowItemTitle}>{item.title}</Text>
        <View style={styles.rowItemActions}>
          <TouchableOpacity onPress={() => completeTodo(item.id)}>
            <Text
              style={[
                styles.rowItemActionsText,
                styles.rowItemActionsTextPositive,
              ]}>
              Complete
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
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
        }}>
        <AppBar title="Todo List" subtitle="Pending" />
        <InputTodoComponent
          clearTextOnFocus={true}
          maxLength={200}
          onSubmitText={this.props.onAdd}
          placeholderColor="#AAAAAA"
          placeholderText="Add Todo Item"
          selectionColor="#333333"
          underlineColorAndroid="#ffffff"
        />

        <FlatList
          data={this.props.activeTodoList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
            this.renderItem(
              item,
              this.props.completeTodo,
              this.props.deleteActive,
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

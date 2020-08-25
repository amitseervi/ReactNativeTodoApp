import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import Todo from '../models/Todo';
import {ActiveTodoListProps} from '../containers/ActiveTodoListContainer';
import InputTodoComponent, {
  InputTodoState,
  INITIAL_INPUT_STATE,
} from './InputTodoComponent';
type ActiveTodoListState = InputTodoState;
export default class ActiveTodoList extends React.Component<
  ActiveTodoListProps,
  ActiveTodoListState
> {
  state = INITIAL_INPUT_STATE;
  person = {
    name: '',
  };

  componentDidMount() {
    this.person.name = 'Ashish';
  }

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

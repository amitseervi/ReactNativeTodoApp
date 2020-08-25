import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
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
  private onSubmitButtonClicked = () => {
    const text = this.state.inputText;
    console.log('On submit button clicked');
    if (!text) {
      //TODO : can show error message here
      return;
    }
    this.props.onAdd(text);
  };

  private onInputTextChange = (text: string) => {
    this.setState({
      inputText: text,
    });
  };

  private renderItem = (item: Todo) => {
    return (
      <View>
        <Text>{item.title}</Text>
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
          onTextChange={this.onInputTextChange}
          placeholderText="Add Todo Item"
          selectionColor="#457853"
          underlineColorAndroid="#094252"
        />
        <Button title="Add" onPress={this.onSubmitButtonClicked} />
        <FlatList
          data={this.props.activeTodoList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

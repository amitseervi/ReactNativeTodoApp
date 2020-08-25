import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
type InputTodoProps = {
  placeholderText: string;
  placeholderColor: string;
  selectionColor: string;
  maxLength: number;
  clearTextOnFocus: boolean;
  underlineColorAndroid: string;
  onSubmitText: (text: string) => void;
};
export type InputTodoState = {
  inputText: string;
};
export const INITIAL_INPUT_STATE: InputTodoState = {
  inputText: '',
};

class InputTodoComponent extends React.Component<
  InputTodoProps,
  InputTodoState
> {
  state: InputTodoState = INITIAL_INPUT_STATE;

  private onTextChange = (text: string) => {
    this.setState({
      inputText: text,
    });
  };

  private onTextSubmit = () => {
    const text = this.state.inputText;
    if (!text) {
      return;
    }
    this.props.onSubmitText(text);
    this.setState(INITIAL_INPUT_STATE);
  };
  render() {
    const placeholderText = this.props.placeholderText;
    const selectionColor = this.props.selectionColor;
    const placeholderColor = this.props.placeholderColor;
    const maxLength = this.props.maxLength;
    const clearTextOnFocus = this.props.clearTextOnFocus;
    const underlineColorAndroid = this.props.underlineColorAndroid;
    return (
      <View style={styles.inputContainerStyle}>
        <TextInput
          value={this.state.inputText}
          placeholder={placeholderText}
          selectionColor={selectionColor}
          placeholderTextColor={placeholderColor}
          maxLength={maxLength}
          clearTextOnFocus={clearTextOnFocus}
          onChangeText={this.onTextChange}
          onSubmitEditing={this.onTextSubmit}
          underlineColorAndroid={underlineColorAndroid}
          style={styles.inputTextStyle}
        />
        <TouchableOpacity
          style={styles.inputButtonStyle}
          onPress={this.onTextSubmit}>
          <Text style={styles.inputButtonTextStyle}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputTodoComponent;

const styles = StyleSheet.create({
  inputContainerStyle: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputTextStyle: {
    flex: 1,
  },
  inputButtonStyle: {
    borderRadius: 4,
    paddingHorizontal: 12,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5',
  },
  inputButtonTextStyle: {
    color: '#ffffff',
    fontSize: 16,
  },
});

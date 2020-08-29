import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
type InputTodoProps = {
  placeholderText: string;
  placeholderColor: string;
  selectionColor: string;
  maxLength: number;
  clearTextOnFocus: boolean;
  underlineColorAndroid: string;
  onSubmitText: (text: string) => void;
};
type InputTodoState = {
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
          <Icon name="send" style={styles.inputButtonIconStyle} size={20} />
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
    color: 'white',
  },
  inputButtonStyle: {
    padding: 8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  inputButtonIconStyle: {
    color: '#5a72e8',
  },
});

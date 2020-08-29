import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
export type AppBarProps = {
  title: string;
  subtitle: string;
};
export default class AppBar extends React.Component<AppBarProps> {
  render() {
    return (
      <View style={styles.appbarContainer}>
        <Text style={styles.appbarTitle}>{this.props.title}</Text>
        <Text style={styles.appbarSubtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbarContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4a4a4a',
  },
  appbarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appbarSubtitle: {
    color: '#d9d9d9',
    fontSize: 14,
  },
});

import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { LoginComponent } from './src/common';

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: false
  }

  exampleOnChange(prop, value) {
    this.setState({ [prop]: value });
  }

  exampleOnSubmit() {
    this.setState({ isLoading: true });
    // Dev note: this mimics a network request delay.
    setTimeout(() => {
      Alert.alert(`
        The current email is ${this.state.email}.\n
        The current password is\n
        ${this.state.password.length} characters long.
      `)
      this.setState({ isLoading: false })
    }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginComponent
          email={this.state.email}
          password={this.state.password}
          onChange={(prop, val) => this.exampleOnChange(prop, val)}
          onSubmit={this.exampleOnSubmit.bind(this)}
          isLoading={this.state.isLoading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

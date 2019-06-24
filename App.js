import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginComponent } from './src/common';

export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  }

  exampleOnChange(prop, value) {
    this.setState({ [prop]: value });
  }

  exampleOnSubmit() {

    console.log(`
      The current email is ${this.state.email}.
      The current password is ${this.state.password}.
    `);
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginComponent
          email={this.state.email}
          password={this.state.password}
          onChange={(prop, val) => this.exampleOnChange(prop, val)}
          onSubmit={this.exampleOnSubmit.bind(this)}
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

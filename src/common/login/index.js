import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';

const LoginComponent = (props) => {
  return (
    <View>
      <TextInput
        placeholder="email"
        value={props.email}
        onChangeText={(text) => props.onChange('email', text)}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="password"
        value={props.password}
        onChangeText={(text) => props.onChange('password', text)}
        autoCapitalize="none"
        secureTextEntry
      />
      <Button
        title="Submit"
        onPress={() => props.onSubmit()}
      />
    </View>
  );
}

LoginComponent.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginComponent;

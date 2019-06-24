import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const LoginComponent = (props) => {
  return (
    <View>
      <Text>this is the login component</Text>
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

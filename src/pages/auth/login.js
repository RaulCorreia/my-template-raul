import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/principalAction';


const Login = () => {

  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Login" onPress={() => dispatch(login()) } />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});


export default Login;
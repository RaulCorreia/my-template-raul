import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../actions/principalAction';

const Home = () => {

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => dispatch(logout()) } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

export default Home;
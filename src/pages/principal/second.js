import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Second = () => (
  <View style={styles.container}>
    <Text>Second</Text>
  </View>
);

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

export default Second;
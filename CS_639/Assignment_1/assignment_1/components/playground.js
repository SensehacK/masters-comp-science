import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Playground = () => {
  return (
    <View style={styles.header}>
      {/* <Text>Kautilya</Text> */}
      <Text> Kautilya Save </Text>
      <Text> Mobile Web Development </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 2,
  //   },
  header: {
    height: 100,
    padding: 20,
    backgroundColor: 'yellow',
  },
});

export default Playground;

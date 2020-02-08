import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Playground_2 = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text>Haikus are easy.</Text>
        <Text>But not all haikus make sense.</Text>
        <Text>Refrigerator.</Text>
      </View>
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

export default Playground_2;

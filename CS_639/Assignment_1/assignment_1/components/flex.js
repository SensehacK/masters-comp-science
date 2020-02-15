import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.violet}></View>
      <View style={styles.indigo}></View>
      <View style={styles.blue}></View>
      <View style={styles.yellow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  violet: {
    width: 100,
    height: 100,
    backgroundColor: '#9400D3',
  },
  indigo: {
    width: 100,
    height: 100,
    backgroundColor: '#4B0082',
  },
  blue: {
    width: 100,
    height: 100,
    backgroundColor: '#0000FF',
  },
  green: {
    width: 100,
    height: 100,
    backgroundColor: '#00FF00',
  },
  yellow: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFF00',
  },
  orange: {
    width: 100,
    backgroundColor: '#FF7F00',
  },
  red: {
    width: 100,
    backgroundColor: '#FF0000',
  },
});

export default Flex;

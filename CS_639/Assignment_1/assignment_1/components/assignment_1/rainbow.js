import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Rainbow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.violet}></View>
      <View style={styles.indigo}></View>
      <View style={styles.blue}></View>
      <View style={styles.green}></View>
      <View style={styles.yellow}></View>
      <View style={styles.orange}></View>
      <View style={styles.red}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  violet: {
    height: 125,
    backgroundColor: '#9400D3',
  },
  indigo: {
    height: 125,
    backgroundColor: '#4B0082',
  },
  blue: {
    height: 125,
    backgroundColor: '#0000FF',
  },
  green: {
    height: 125,
    backgroundColor: '#00FF00',
  },
  yellow: {
    height: 125,
    backgroundColor: '#FFFF00',
  },
  orange: {
    height: 125,
    backgroundColor: '#FF7F00',
  },
  red: {
    height: 150,
    backgroundColor: '#FF0000',
  },
});

export default Rainbow;

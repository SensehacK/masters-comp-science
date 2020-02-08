import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>Hi! I am the first paragraph!</Text>

          <Text style={styles.paragraph}>Hi! I am the second paragraph!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  paragraphContainer: {
    height: 250,
    width: 250,
    backgroundColor: 'red',
  },
  paragraph: {
    color: 'white',
    fontSize: 20,
  },
});

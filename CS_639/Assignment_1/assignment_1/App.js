import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import Playground from './components/playground';
import Playground_2 from './components/playground_2';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello Sensehack!</Text> */}
      <Header title="Assignment 1" />
      <Playground />
      <Playground_2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

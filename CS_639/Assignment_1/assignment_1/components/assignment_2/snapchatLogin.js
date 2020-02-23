import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const SnapchatLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.yellowBlock}></View>
      <TouchableHighlight
        onPress={() => {
          alert('You have successfully logged in.');
        }}>
        <View style={styles.redBlock}>
          <Text>LOG IN</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          alert('You have successfully signed up.');
        }}>
        <View style={styles.blueBlock}>
          <Text>SIGN UP</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },

  yellowBlock: {
    backgroundColor: '#fffc00',
    height: 500,
    width: 350,
  },

  redBlock: {
    color: '#ff0049',
    backgroundColor: '#ff0049',
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  blueBlock: {
    color: '#00a9ff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a9ff',
    width: 350,
  },
});

export default SnapchatLogin;

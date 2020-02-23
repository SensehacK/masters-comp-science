import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const TouchableButton = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          alert('Sensehack');
        }}>
        <View style={styles.buttonT1}>
          <Text style={styles.buttonText1}>Hello Touchable Button</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          alert('You pressed another one');
        }}>
        <View style={styles.buttonT2}>
          <Text style={styles.buttonText2}>Hello Touchable Button</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableText: {
    fontFamily: 'futura',
    color: 'cyan',
    fontSize: 50,
    textAlign: 'center',
  },

  buttonT1: {
    height: 75,
    width: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  buttonText1: {
    color: 'white',
    fontSize: 20,
  },

  buttonT2: {
    height: 75,
    width: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  buttonText2: {
    color: 'white',
    fontSize: 20,
  },
});

export default TouchableButton;

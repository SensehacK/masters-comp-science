import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const HomeLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.yellowBlock}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Kautilya</Text>
        </View>

        <View style={styles.introBlock}>
          <Text style={styles.introBlockText}>
            It still takes 9 months for 9 people to write the software.
          </Text>
        </View>

        <TouchableHighlight
          onPress={() => {
            alert('Login successful');
          }}>
          <View style={styles.redBlock}>
            <Text>LOG IN</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            alert('Sign up successful');
          }}>
          <View style={styles.blueBlock}>
            <Text>SIGN UP</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },

  introBlock: {
    marginTop: 200,
  },

  introBlockText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 50,
  },

  yellowBlock: {
    backgroundColor: '#fffc00',
    height: 900,
    width: 420,
  },

  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    backgroundColor: 'gray',
  },

  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 45,
    fontFamily: 'Helvetica',
    backgroundColor: 'gray',
  },

  redBlock: {
    color: '#ff0049',
    backgroundColor: '#00a9ff',
    width: 350,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  blueBlock: {
    color: '#00a9ff',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a9ff',
    width: 350,
    margin: 20,
  },
});

export default HomeLogin;

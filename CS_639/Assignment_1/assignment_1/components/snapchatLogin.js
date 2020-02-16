import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SnapchatLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.yellowBlock}></View>
      <View style={styles.redBlock}>
        <Text>LOG IN</Text>
      </View>
      <View style={styles.blueBlock}>
        <Text>SIGN UP</Text>
      </View>
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

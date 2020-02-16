import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoogleLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.googleLogo1}>G</Text>
      <Text style={styles.googleLogo2}>o</Text>
      <Text style={styles.googleLogo3}>o</Text>
      <Text style={styles.googleLogo4}>g</Text>
      <Text style={styles.googleLogo5}>l</Text>
      <Text style={styles.googleLogo6}>e</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleLogo1: {
    fontSize: 100,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'blue',
  },
  googleLogo2: {
    fontSize: 100,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'red',
  },
  googleLogo3: {
    fontSize: 100,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'yellow',
  },
  googleLogo4: {
    fontSize: 100,
    fontFamily: 'Arial',

    fontWeight: 'bold',
    color: 'blue',
  },
  googleLogo5: {
    fontSize: 100,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'green',
  },
  googleLogo6: {
    fontSize: 100,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'red',
  },
});

export default GoogleLogo;

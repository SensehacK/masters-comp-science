import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const GoogleSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.google}>
        <Text style={styles.googleLogo1}>G</Text>
        <Text style={styles.googleLogo2}>o</Text>
        <Text style={styles.googleLogo3}>o</Text>
        <Text style={styles.googleLogo4}>g</Text>
        <Text style={styles.googleLogo5}>l</Text>
        <Text style={styles.googleLogo6}>e</Text>
      </View>

      <View style={styles.searchComponent}>
        <TextInput style={styles.searchBar} />
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  google: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  searchComponent: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  searchBar: {
    borderRadius: 10,
    height: 50,
    width: 300,
    borderWidth: 1,
    color: 'brown',
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  searchButton: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#00a9ff',
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  searchButtonText: {
    fontSize: 45,
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

export default GoogleSearch;

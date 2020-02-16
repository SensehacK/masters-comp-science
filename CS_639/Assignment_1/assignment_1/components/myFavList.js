import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyFavList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Favorite Movies</Text>

      <Text style={styles.textComponent}>1. The Godfather</Text>
      <Text style={styles.textComponent}>2. The Dark Knight</Text>
      <Text style={styles.textComponent}>3. Shawshank Redemption</Text>
      <Text style={styles.textComponent}>4. Spirited Away</Text>
      <Text style={styles.textComponent}>5. The Matrix</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    margin: 15,
    fontFamily: 'Helvetica',
  },
  textComponent: {
    fontSize: 25,
    fontFamily: 'Times New Roman',
    padding: 10,
    color: 'blue',
  },
});

export default MyFavList;

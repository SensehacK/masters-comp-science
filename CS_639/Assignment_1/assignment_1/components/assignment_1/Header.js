import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'SensehacK',
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: '#4144',
  },
  text: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

export default Header;

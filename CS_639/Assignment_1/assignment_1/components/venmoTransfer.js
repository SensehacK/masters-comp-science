import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

const Venmo = () => {
  return (
    //   This code is tested with real device and Xcode Simulator.

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transfer Balance</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceType}>Amount</Text>
        <Text style={styles.balanceNum}>$20.00</Text>
        <Text style={styles.balanceText}>Your Venmo balance is $200000.00</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardContainerText}> Debit Card </Text>
          <Text style={styles.cardContainerText}> $0.25 Fee ></Text>
        </View>

        <View style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#0099cc',

    // height: 50,/
  },
  headerText: {
    marginTop: 25,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  balanceContainer: {
    height: 650,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  balanceType: {
    fontSize: 35,
  },

  balanceNum: {
    fontSize: 65,
    fontWeight: 'bold',
  },

  balanceText: {
    fontSize: 15,
  },

  buttonContainer: {
    height: 200,
    backgroundColor: 'grey',
  },

  cardContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    borderColor: 'black',
    backgroundColor: 'red',
    borderRadius: 10,
  },

  cardContainerText: {
    color: 'black',
    fontSize: 25,
  },

  nextButton: {
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    backgroundColor: '#0099cc',
    borderRadius: 10,
  },

  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Venmo;

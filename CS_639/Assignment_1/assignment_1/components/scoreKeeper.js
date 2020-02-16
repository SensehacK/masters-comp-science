import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

const ScoreKeeper = () => {
  return (
    //   This code is tested with real device and Xcode Simulator.
    // Link https://github.com/SensehacK/masters-comp-science/blob/master/CS_639/Assets/Screenshots/ScoreKeeper%20Screen.png

    <View style={styles.container}>
      <Text style={styles.header}>ScoreKeeper</Text>

      <View style={styles.teamContainer}>
        <View style={styles.teamContainer1}>
          <View style={styles.teamButton}>
            <Text style={styles.teamButtonText}>Team 1</Text>
          </View>
          <View style={styles.teamButton}>
            <Text style={styles.teamButtonText}>Team 2</Text>
          </View>
          <View style={styles.teamButton}>
            <Text style={styles.teamButtonText}>Team 3</Text>
          </View>
        </View>

        <View style={styles.teamContainer2}>
          <View style={styles.teamButton}>
            <Text style={styles.teamButtonText}>Score</Text>
          </View>
          <View style={styles.teamButton}>
            <Text style={styles.teamButtonText}>Score</Text>
          </View>
          <View style={styles.teamButton}>
            <Text style={styles.teamButtonText}>Score</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },

  header: {
    marginTop: 70,
    textAlign: 'center',
    fontSize: 65,
    color: 'black',
    fontWeight: 'bold',
  },

  teamContainer: {
    flexDirection: 'row',
  },

  teamContainer1: {
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
  },

  teamContainer2: {
    flexDirection: 'column',
    color: 'black',
  },

  teamButton: {
    height: 80,
    width: 150,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },

  teamButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ScoreKeeper;

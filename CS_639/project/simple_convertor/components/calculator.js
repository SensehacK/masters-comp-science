import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  ImageBackground,
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
// import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class CalculatorVC extends Component {
  state = {
    homeDisplay: 'flex',
    distanceDisplay: 'none',
    weightDisplay: 'none',
    measureDisplay: 'none',
    ValueA: '0',
    ValueB: '0',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <View style={styles.headTextContainer}>
            <Text style={styles.headText}>Calculator Kautilya</Text>
          </View>
        </View>

        <View style={styles.conversionContainer}>
          <View style={styles.conversionHeadContainer}>
            <Text style={styles.conversionHeadText}>KM to MILES</Text>
          </View>
          <View style={styles.inputBoxContainer}>
            <TextInput
              style={styles.inputBox}
              value={this.state.valueA}
              onChangeText={this.kmToMiles}
            />
            <TextInput
              style={styles.inputBox}
              value={this.state.valueB}
              onChangeText={this.milesToKm}
            />
          </View>
        </View>
        <View style={styles.conversionContainer}>
          <View style={styles.conversionHeadContainer}>
            <Text style={styles.conversionHeadText}>CentiMeter to Meter</Text>
          </View>
          <View style={styles.inputBoxContainer}>
            <TextInput
              style={styles.inputBox}
              value={this.state.valueA}
              onChangeText={this.cmToMeter}
            />
            <TextInput
              style={styles.inputBox}
              value={this.state.valueB}
              onChangeText={this.meterToCm}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: deviceWidth,
    height: deviceHeight / 6,
    backgroundColor: 'blue',
  },
  headTextContainer: {
    fontSize: deviceHeight / 21,
    color: 'white',
  },
  headText: {
    fontSize: deviceHeight / 21,
    color: 'white',
  },
  buttonContainer: {
    height: deviceHeight / 5,
    width: (3 * deviceWidth) / 4,
    backgroundColor: 'blue',
    marginHorizontal: 'auto',
    marginTop: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: deviceHeight / 24,
    color: 'white',
  },
  conversionHeadContainer: {
    marginHorizontal: 'auto',
    marginTop: 30,
    alignItems: 'center',
  },
  conversionHeadText: {
    fontSize: deviceHeight / 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  inputBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  inputBox: {
    backgroundColor: 'grey',
    width: (1.4 * deviceWidth) / 4,
    height: deviceHeight / 10,
    borderRadius: 10,
    fontSize: deviceHeight / 25,
    color: 'black',

    textAlign: 'center',
  },
  conversionContainer: {
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
  backButtonContainer: {
    backgroundColor: 'white',
    width: (1.2 * deviceWidth) / 6,
    height: deviceHeight / 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  backButtonText: {
    fontSize: deviceHeight / 24,
  },
});

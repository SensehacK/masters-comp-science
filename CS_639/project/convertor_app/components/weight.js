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

export default class WeightVC extends Component {
  state = {
    homeDisplay: 'flex',
    distanceDisplay: 'none',
    weightDisplay: 'none',
    measureDisplay: 'none',
    ValueA: '0',
    ValueB: '0',
    ValueC: '0',
    ValueD: '0',
  };

  //   Other conversion functions
  kgToPounds = (valueA) => {
    this.setState({
      valueA,
      valueB: String((parseInt(valueA) * 2.2).toFixed(2)),
    });
  };
  poundsToKg = (valueB) => {
    this.setState({
      valueB,
      valueA: String((parseInt(valueB) / 2.2).toFixed(2)),
    });
  };
  gmsToOunces = (valueC) => {
    this.setState({
      valueC,
      valueD: String((parseInt(valueC) / 28.35).toFixed(2)),
    });
  };
  ouncesToGms = (valueD) => {
    this.setState({
      valueD,
      valueC: String((parseInt(valueD) * 28.35).toFixed(2)),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <View style={styles.headTextContainer}>
            <Text style={styles.headText}>Weight</Text>
          </View>
        </View>

        <View style={styles.conversionContainer}>
          <View style={styles.conversionHeadContainer}>
            <Text style={styles.conversionHeadText}>KG to LB</Text>
          </View>
          <View style={styles.inputBoxContainer}>
            <TextInput
              style={styles.inputBox}
              value={this.state.valueA}
              onChangeText={this.kgToPounds}
            />
            <TextInput
              style={styles.inputBox}
              value={this.state.valueB}
              onChangeText={this.poundsToKg}
            />
          </View>
        </View>
        <View style={styles.conversionContainer}>
          <View style={styles.conversionHeadContainer}>
            <Text style={styles.conversionHeadText}>Grams to Ounces</Text>
          </View>
          <View style={styles.inputBoxContainer}>
            <TextInput
              style={styles.inputBox}
              value={this.state.valueC}
              onChangeText={this.gmsToOunces}
            />
            <TextInput
              style={styles.inputBox}
              value={this.state.valueD}
              onChangeText={this.ouncesToGms}
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

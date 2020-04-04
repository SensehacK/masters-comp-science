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
import DistanceVC from './distance';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class Convertor extends Component {
  constructor(props) {
    super(props);
    this.kmToMiles = this.kmToMiles.bind(this);
  }
  state = {
    homeDisplay: 'flex',
    distanceDisplay: 'none',
    weightDisplay: 'none',
    measureDisplay: 'none',
    ValueA: '0',
    ValueB: '0',
  };

  _handleTextChange = (inputValue) => {
    this.setState({inputValue});
  };
  kmToMiles = (valueA) => {
    this.setState({
      valueA,
      valueB: parseInt(valueA) / 1.609,
    });
  };
  milesToKm = (valueB) => {
    this.setState({
      valueB,
      valueA: parseInt(valueB) * 1.609,
    });
  };
  cmToMeter = (valueA) => {
    this.setState({
      valueA,
      valueB: parseInt(valueA) / 100,
    });
  };
  meterToCm = (valueB) => {
    this.setState({
      valueB,
      valueB: parseInt(valueA) * 100,
    });
  };

  //   Dynamic view changing functions
  homePage = () =>
    this.setState((state) => ({
      homeDisplay: 'flex',
      distanceDisplay: 'none',
      weightDisplay: 'none',
      measureDisplay: 'none',
    }));

  // Adding Distance view component
  showDistance = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'flex',
      weightDisplay: 'none',
      measureDisplay: 'none',
    }));

  // Adding Weight view component
  showWeight = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'none',
      weightDisplay: 'flex',
      measureDisplay: 'none',
    }));

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            {/* Home display */}
            <View style={{display: this.state.homeDisplay}}>
              {/* Heading */}
              <View style={styles.headContainer}>
                <Text style={styles.headText}>Simple Conversion</Text>
              </View>

              {/* Distance Button Layout */}
              <TouchableHighlight onPress={this.showDistance}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Distance</Text>
                </View>
              </TouchableHighlight>

              {/* Weight Button Layout */}
              <TouchableHighlight onPress={this.showWeight}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Weight</Text>
                </View>
              </TouchableHighlight>

              {/* Speed Button Layout */}
              <TouchableHighlight onPress={this.showDistance}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Speed</Text>
                </View>
              </TouchableHighlight>
            </View>

            {/* Distance Display Component Layout */}
            <View style={{display: this.state.distanceDisplay}}>
              <View style={styles.headContainer}>
                <TouchableHighlight onPress={this.homePage}>
                  <View style={styles.backButtonContainer}>
                    <Text style={styles.backButtonText}>Back</Text>
                  </View>
                </TouchableHighlight>

                <View style={styles.headTextContainer}>
                  <Text style={styles.headText}>Distance Conversion</Text>
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
                  <Text style={styles.conversionHeadText}>
                    CentiMeter to Meter
                  </Text>
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

            {/* Weight Display Component Layout */}
            <View style={{display: this.state.weightDisplay}}>
              <TouchableHighlight onPress={this.homePage}>
                <View style={styles.backButtonContainer}>
                  <Text style={styles.backButtonText}>Back</Text>
                </View>
              </TouchableHighlight>
              <DistanceVC />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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

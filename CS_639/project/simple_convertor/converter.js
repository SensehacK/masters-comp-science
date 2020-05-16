import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  SafeAreaView,
  ScrollView,

} from 'react-native';

import DistanceVC from './components/distance';
import CalculatorVC from './components/calculator';
import MeasureVC from './components/measure';
import SpeedVC from './components/speed';
import WeightVC from './components/weight';
import TemperatureVC from './components/temperature';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class Converter extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    homeDisplay: 'flex',
    distanceDisplay: 'none',
    weightDisplay: 'none',
    measureDisplay: 'none',
    speedDisplay: 'none',
    calculatorDisplay: 'none',
  };

  _handleTextChange = (inputValue) => {
    this.setState({ inputValue });
  };

  //   Dynamic view changing functions
  // Home view
  homePage = () =>
    this.setState((state) => ({
      homeDisplay: 'flex',
      distanceDisplay: 'none',
      weightDisplay: 'none',
      temperatureDisplay: 'none',
      measureDisplay: 'none',
      speedDisplay: 'none',
      calculatorDisplay: 'none',
    }));

  // Adding Distance view component
  showDistance = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'flex',
      weightDisplay: 'none',
      temperatureDisplay: 'none',
      measureDisplay: 'none',
      speedDisplay: 'none',
      calculatorDisplay: 'none',
    }));

  // Adding Weight view component
  showWeight = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'none',
      weightDisplay: 'flex',
      temperatureDisplay: 'none',
      measureDisplay: 'none',
      speedDisplay: 'none',
      calculatorDisplay: 'none',
    }));

  // Adding Measure view component
  showMeasure = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'none',
      weightDisplay: 'none',
      temperatureDisplay: 'none',
      measureDisplay: 'flex',
      speedDisplay: 'none',
      calculatorDisplay: 'none',
    }));

  // Adding Measure view component
  showTemperature = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'none',
      weightDisplay: 'none',
      temperatureDisplay: 'flex',
      measureDisplay: 'none',
      speedDisplay: 'none',
      calculatorDisplay: 'none',
    }));

  // Adding Speed view component
  showSpeed = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'none',
      weightDisplay: 'none',
      temperatureDisplay: 'none',
      measureDisplay: 'none',
      speedDisplay: 'flex',
      calculatorDisplay: 'none',
    }));

  // Adding Calculator view component
  showCalculator = () =>
    this.setState((state) => ({
      homeDisplay: 'none',
      distanceDisplay: 'none',
      weightDisplay: 'none',
      temperatureDisplay: 'none',
      measureDisplay: 'none',
      speedDisplay: 'none',
      calculatorDisplay: 'flex',
    }));

  render() {
    return (
      <View style={styles.container}>


        {/* Home display */}
        <View style={{ display: this.state.homeDisplay }}>
          {/* Heading */}
          <View style={styles.headContainer}>
            <Text style={styles.headText}>Simple Conversion</Text>
          </View>
          <ScrollView>
            {/* Distance Button Layout */}
            <TouchableHighlight onPress={this.showDistance}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Distance</Text>
                </View>
              </View>
            </TouchableHighlight>

            {/* Weight Button Layout */}
            <TouchableHighlight onPress={this.showWeight}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Weight</Text>
                </View>
              </View>
            </TouchableHighlight>

            {/* Measure Button Layout */}
            <TouchableHighlight onPress={this.showMeasure}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Measure</Text>
                </View>
              </View>
            </TouchableHighlight>

            {/* Temperature Button Layout */}
            <TouchableHighlight onPress={this.showTemperature}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Temperature</Text>
                </View>
              </View>
            </TouchableHighlight>

            {/* Speed Button Layout */}
            <TouchableHighlight onPress={this.showSpeed}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Speed</Text>
                </View>
              </View>
            </TouchableHighlight>

            {/* Speed Button Layout */}
            <TouchableHighlight onPress={this.showSpeed}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Speed</Text>
                </View>
              </View>
            </TouchableHighlight>


            {/* Calculator Button Layout */}
            <TouchableHighlight onPress={this.showCalculator}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Calculator</Text>
                </View>
              </View>
            </TouchableHighlight>
            {/* Speed Button Layout */}
            <TouchableHighlight onPress={this.showSpeed}>
              <View style={styles.buttonInContainer}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Speed</Text>
                </View>
              </View>
            </TouchableHighlight>

          </ScrollView>

        </View>


        {/* ################COMPONENTS################### */}
        {/* Distance Display Component Layout */}
        <View style={{ display: this.state.distanceDisplay }}>
          <TouchableHighlight onPress={this.homePage}>
            <View style={styles.backButtonContainer}>
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableHighlight>
          <DistanceVC />
        </View>

        {/* Weight Display Component Layout */}
        <View style={{ display: this.state.weightDisplay }}>
          <TouchableHighlight onPress={this.homePage}>
            <View style={styles.backButtonContainer}>
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableHighlight>
          <WeightVC />
        </View>

        {/* Temperature Display Component Layout */}
        <View style={{ display: this.state.temperatureDisplay }}>
          <TouchableHighlight onPress={this.homePage}>
            <View style={styles.backButtonContainer}>
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableHighlight>
          <TemperatureVC />
        </View>

        {/* Measure Display Component Layout */}
        <View style={{ display: this.state.measureDisplay }}>
          <TouchableHighlight onPress={this.homePage}>
            <View style={styles.backButtonContainer}>
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableHighlight>
          <MeasureVC />
        </View>

        {/* Speed Display Component Layout */}
        <View style={{ display: this.state.speedDisplay }}>
          <TouchableHighlight onPress={this.homePage}>
            <View style={styles.backButtonContainer}>
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableHighlight>
          <SpeedVC />
        </View>

        {/* Calculator Display Component Layout */}
        <View style={{ display: this.state.calculatorDisplay }}>
          <TouchableHighlight onPress={this.homePage}>
            <View style={styles.backButtonContainer}>
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableHighlight>
          <CalculatorVC />
        </View>

        {/* End Component Layout calls */}

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

  buttonInContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    height: deviceHeight / 8,
    width: (3 * deviceWidth) / 6,
    backgroundColor: 'blue',
    marginHorizontal: 'auto',
    marginVertical: 20,
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

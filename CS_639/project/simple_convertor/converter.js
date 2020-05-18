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
import globalStyle from './style'

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

  navigator(value) {
    console.log("Hello navigation")
    this.props.navigation.navigate(value)

  }
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

            <View style={styles.contentContainer}>
              <View style={globalStyle.buttonMain}>
                {/* Distance Button Layout */}
                <TouchableHighlight onPress={() => this.navigator('Currency')}>
                  <View style={styles.buttonInContainer}>
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Currency</Text>
                    </View>
                  </View>
                </TouchableHighlight>

                {/* Weight Button Layout */}
                <TouchableHighlight onPress={() => this.navigator('Distance')}>
                  <View style={styles.buttonInContainer}>
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Distance</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={globalStyle.buttonMain}>

                {/* Weight Button Layout */}
                <TouchableHighlight onPress={() => this.navigator('Weight')}>
                  <View style={styles.buttonInContainer}>
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Weight</Text>
                    </View>
                  </View>
                </TouchableHighlight>

                {/* Temperature Button Layout */}
                <TouchableHighlight onPress={() => this.navigator('Temperature')}>
                  <View style={styles.buttonInContainer}>
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Temperature</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={globalStyle.buttonMain}>

                {/* Speed Button Layout */}
                <TouchableHighlight onPress={() => this.navigator('Speed')}>
                  <View style={styles.buttonInContainer}>
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Speed</Text>
                    </View>
                  </View>
                </TouchableHighlight>



              </View>


            </View>
          </ScrollView>

        </View >




      </View >
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
    backgroundColor: '#2f6e20',
  },
  headTextContainer: {
    fontSize: deviceHeight / 21,
    color: 'white',
  },
  headText: {
    fontSize: deviceHeight / 21,
    color: 'white',
  },
  contentContainer: {
    justifyContent:'space-evenly',
    height: (4 * deviceHeight) / 6

  },

  buttonInContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    height: deviceHeight / 10,
    width: (3 * deviceWidth) / 7,
    backgroundColor: '#2f6e20',
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: deviceHeight / 30,
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
    color: '#76b852',
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
    borderColor: '#76b852',
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

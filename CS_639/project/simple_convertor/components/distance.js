import React, { Component } from 'react';
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
  Picker,
} from 'react-native';
// import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class DistanceVC extends Component {
  constructor(props) {
    super(props);
  }
  state = {

    ValueA: '0',
    ValueB: '0',
    from: 'KM',
    to: 'CM',
    exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
  };

  //   Other conversion functions
  kmToMiles = (valueA) => {
    this.setState({
      valueA,
      valueB: String((parseInt(valueA) / 1.609).toFixed(2)),
    });
  };
  milesToKm = (valueB) => {
    this.setState({
      valueB,
      valueA: String((parseInt(valueB) * 1.609).toFixed(2)),
    });
  };
  cmToMeter = (valueC) => {
    this.setState({
      valueC,
      valueD: String((parseInt(valueC) / 100).toFixed(2)),
    });
  };
  meterToCm = (valueD) => {
    this.setState({
      valueD,
      valueC: String((parseInt(valueD) * 100).toFixed(2)),
    });
  };
  converter(value, input) {
    console.log(input);

    if (input == 'value1') {
      this.setState({
        ValueA: value,
      })
      if (this.state.from == 'KM' && this.state.to == 'CM') {
        this.setState({
          ValueB: String((parseInt(value) * 100000).toFixed(2)),
        });
        console.log('KM TO CM')
      } else if (this.state.from == 'KM' && this.state.to == 'Mile') {
        this.setState({
          ValueB: String((parseInt(value) / 1.609).toFixed(2)),
        });
        console.log('KM TO Mile')
      } else if (this.state.from == 'KM' && this.state.to == 'Meter') {
        this.setState({
          ValueB: String((parseInt(value) * 1000).toFixed(2)),
        });
        console.log('KM TO Meter')
      } else if (this.state.from == 'CM' && this.state.to == 'KM') {
        this.setState({
          ValueB: String((parseInt(value) / 100000).toFixed(2)),
        });
        console.log('CM TO KM')
      } else if (this.state.from == 'CM' && this.state.to == 'Mile') {
        this.setState({
          ValueB: String((parseInt(value) / 160934).toFixed(2)),
        });
        console.log('CM TO Mile')
      } else if (this.state.from == 'CM' && this.state.to == 'Meter') {
        this.setState({
          ValueB: String((parseInt(value) / 100).toFixed(2)),
        });
        console.log('CM TO Meter')
      } else if (this.state.from == 'Mile' && this.state.to == 'KM') {
        this.setState({
          ValueB: String((parseInt(value) * 1.60).toFixed(2)),
        });
        console.log('Mile TO KM')
      } else if (this.state.from == 'Mile' && this.state.to == 'CM') {
        this.setState({
          ValueB: String((parseInt(value) * 160934).toFixed(2)),
        });
        console.log('Mile TO CM')
      } else if (this.state.from == 'Mile' && this.state.to == 'Meter') {
        this.setState({
          ValueB: String((parseInt(value) * 1609).toFixed(2)),
        });
        console.log('Mile TO Meter')
      } else if (this.state.from == 'Meter' && this.state.to == 'KM') {
        this.setState({
          ValueB: String((parseInt(value) / 1000).toFixed(2)),
        });
        console.log('Meter TO KM')
      } else if (this.state.from == 'Meter' && this.state.to == 'CM') {
        this.setState({
          ValueB: String((parseInt(value) * 100).toFixed(2)),
        });
        console.log('Meter TO CM')
      } else if (this.state.from == 'Meter' && this.state.to == 'Mile') {
        this.setState({
          ValueB: String((parseInt(value) / 1609).toFixed(2)),
        });
        console.log('Meter TO Mile')
      } else if (this.state.from == 'Meter' && this.state.to == 'Meter') {
        this.setState({
          ValueB: value,
        });
        console.log('Meter TO Meter')
      } else if (this.state.from == 'Mile' && this.state.to == 'Mile') {
        this.setState({
          ValueB: value,
        });
        console.log('Mile TO Mile')
      } else if (this.state.from == 'KM' && this.state.to == 'KM') {
        this.setState({
          ValueB: value,
        });
        console.log('KM TO KM')
      } else if (this.state.from == 'CM' && this.state.to == 'CM') {
        this.setState({
          ValueB: value,
        });
        console.log('CM TO CM')
      }

    } /* else if (input == 'value2') {
      const frm = this.state.from;
      this.setState({
        ValueB: value,
        from: this.state.to,
        to: frm,
      }) 
      
    }*/
    



  }
  valuePicker(itemValue,pickerNO){
    if(pickerNO == 'picker1'){
      this.setState({
        from: itemValue,
        ValueA: '0',
        ValueB: '0',
      })
    }else if (pickerNO == 'picker2'){
      this.setState({
        to: itemValue,
        ValueA: '0',
        ValueB: '0',
      })
    }
  }
  navigator(value) {
    console.log("Hello navigation")
    this.props.navigation.navigate(value)

  }
  clear = () => {
    this.setState({
      ValueA: '0',
      ValueB: '0',
    })
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <View style={styles.headTextContainer}>
              <Picker
                selectedValue={this.state.fromCurrency}
                style={styles.pickerHeader}
                onValueChange={(value) => this.navigator(value)}
              >
                <Picker.Item label="Distance Converter" value="Distance" />
                <Picker.Item label="Currency Converter" value="Currency" />
                <Picker.Item label="Measure Converter" value="Measure" />
                <Picker.Item label="Speed Converter" value="Speed" />
                <Picker.Item label="Temperature Converter" value="Temperature" />
                <Picker.Item label="Weight Converter" value="Weight" />

              </Picker>
            </View>
          </View>


          <View style={styles.conversionContainer}>
            <View style={styles.imageConatiner}>
              <Image
                style={styles.currencyImage}
                source={{ uri: this.state.exchangeImage }} />

            </View>

            <View style={styles.dropDownContainer}>
              <Picker
                selectedValue={this.state.from}
                style={styles.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue,'picker1')}
              >
                <Picker.Item label="KM" value="KM" />
                <Picker.Item label="Mile" value="Mile" />
                <Picker.Item label="CM" value="CM" />
                <Picker.Item label="Meter" value="Meter" />

              </Picker>
              <Picker
                selectedValue={this.state.to}
                style={styles.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue,'picker2')}
              >
                <Picker.Item label="KM" value="KM" />
                <Picker.Item label="Mile" value="Mile" />
                <Picker.Item label="CM" value="CM" />
                <Picker.Item label="Meter" value="Meter" />

              </Picker>
            </View>

            <View style={styles.inputBoxContainer}>
              <View style={styles.currencyValueContainer}>
                <Text style={styles.CurrencyValue}>
                  {this.state.from}
                </Text>
              </View>
              <TextInput
                style={styles.inputBox}
                keyboardType={'numeric'}
                value={this.state.ValueA}
                onChangeText={(value) => this.converter(value, 'value1')}
              />


            </View>
            <View style={styles.inputBoxContainer}>
              <View style={styles.currencyValueContainer}>
                <Text style={styles.CurrencyValue}>
                  {this.state.to}
                </Text>
              </View>
              <TextInput
                editable={false} 
                style={styles.inputBox}
                keyboardType={'numeric'}
                value={this.state.ValueB}
                onChangeText={(value) => this.converter(value, 'value2')}
              />

            </View>
            <TouchableHighlight
              onPress={this.clear}>
              <View style={styles.inputBoxContainer}>
                <View style={styles.button} >
                  <Text>
                    Clear
                  </Text>
                </View>

              </View>
            </TouchableHighlight>

          </View>
        </View>
      </ScrollView>
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
    height: deviceHeight / 10,
    backgroundColor: '#b734cf',
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    height: deviceHeight / 14,
    width: (3 * deviceWidth) / 8,
    backgroundColor: '#b734cf',
    borderRadius: 5,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  buttonText: {
    fontSize: deviceHeight / 22
  },

  inputBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputBox: {
    backgroundColor: 'lightgrey',
    width: (3 * deviceWidth) / 4,
    height: deviceHeight / 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

    fontSize: deviceHeight / 25,
    color: 'black',

    textAlign: 'center',
  },
  conversionContainer: {
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: 'blue',
    height: (9 * deviceHeight) / 10,
    marginTop: 10,
  },
  dropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: deviceHeight / 18,
  },
  picker: {
    height: deviceHeight / 16,
    width: (3 * deviceWidth) / 8,
    transform: [
      { scaleX: 1.3 },
      { scaleY: 1.3 },
    ]
  },
  CurrencyValue: {
    fontSize: deviceHeight / 30,
    padding: 10,

  },
  currencyValueContainer: {
    justifyContent: "center",
    alignItems: 'center',
    height: deviceHeight / 10,
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 1
  },
  imageConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyImage: {
    width: (2 * deviceWidth) / 4,
    height: (2 * deviceWidth) / 4
  },
  pickerHeader: {
    height: deviceHeight / 16,
    width: (2 * deviceWidth) / 3,
    transform: [
      { scaleX: 1.5 },
      { scaleY: 1.5 },
    ]

  }
});

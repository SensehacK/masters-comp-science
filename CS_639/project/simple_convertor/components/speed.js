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

export default class SpeedVC extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ValueA: '0',
        ValueB: '0',
        from: 'Mph',
        to: 'Knots',
        exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
  };

  //   Other conversion functions
  mphToKph = (valueA) => {
    this.setState({
      valueA,
      valueB: String((parseInt(valueA) * 1.609).toFixed(2)),
    });
  };
  kphToMph = (valueB) => {
    this.setState({
      valueB,
      valueA: String((parseInt(valueB) / 1.609).toFixed(2)),
    });
  };
  knotToMps = (valueC) => {
    this.setState({
      valueC,
      valueD: String((parseInt(valueC) * 1.151).toFixed(2)),
    });
  };
  mpsToKnot = (valueD) => {
    this.setState({
      valueD,
      valueC: String((parseInt(valueD) / 1.151).toFixed(2)),
    });
  };
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
  converter(value, input) {
    console.log(input);

    if (input == 'value1') {
      this.setState({
        ValueA: value,
      })
      if (this.state.from == 'Mph' && this.state.to == 'Kph') {
        this.setState({
          ValueB: String((parseInt(value) * 1.609).toFixed(2)),
        });
        console.log('Mph TO Kph')
      } else if (this.state.from == 'Mph' && this.state.to == 'Knots') {
        this.setState({
          ValueB: String((parseInt(value) / 1.15).toFixed(2)),
        });
        console.log('Mph TO Knots')
      } else if (this.state.from == 'Mph' && this.state.to == 'MPS') {
        this.setState({
          ValueB: String((parseInt(value) / 2.237).toFixed(2)),
        });
        console.log('Mph TO MPS')
      } else if (this.state.from == 'Kph' && this.state.to == 'Mph') {
        this.setState({
          ValueB: String((parseInt(value) / 1.609).toFixed(2)),
        });
        console.log('Kph TO Mph')
      } else if (this.state.from == 'Kph' && this.state.to == 'Knots') {
        this.setState({
          ValueB: String((parseInt(value) /1.852).toFixed(2)),
        });
        console.log('Kph TO Knots')
      } else if (this.state.from == 'Kph' && this.state.to == 'MPS') {
        this.setState({
          ValueB: String((parseInt(value) / 3.6).toFixed(2)),
        });
        console.log('Kph TO MPS')
      } else if (this.state.from == 'Knots' && this.state.to == 'Mph') {
        this.setState({
          ValueB: String((parseInt(value) * 1.15).toFixed(2)),
        });
        console.log('Knots TO Mph')
      } else if (this.state.from == 'Knots' && this.state.to == 'Kph') {
        this.setState({
          ValueB: String((parseInt(value) * 1.852).toFixed(2)),
        });
        console.log('Knots TO Kph')
      } else if (this.state.from == 'Knots' && this.state.to == 'MPS') {
        this.setState({
          ValueB: String((parseInt(value) / 1.944).toFixed(2)),
        });
        console.log('Knots TO MPS')
      } else if (this.state.from == 'MPS' && this.state.to == 'Mph') {
        this.setState({
          ValueB: String((parseInt(value) / 1000).toFixed(2)),
        });
        console.log('MPS TO Mph')
      } else if (this.state.from == 'MPS' && this.state.to == 'Kph') {
        this.setState({
          ValueB: String((parseInt(value) * 100).toFixed(2)),
        });
        console.log('MPS TO Kph')
      } else if (this.state.from == 'MPS' && this.state.to == 'Knots') {
        this.setState({
          ValueB: String((parseInt(value) / 1609).toFixed(2)),
        });
        console.log('MPS TO Knots')
      } else if (this.state.from == 'MPS' && this.state.to == 'MPS') {
        this.setState({
          ValueB: value,
        });
        console.log('MPS TO MPS')
      } else if (this.state.from == 'Knots' && this.state.to == 'Knots') {
        this.setState({
          ValueB: value,
        });
        console.log('Knots TO Knots')
      } else if (this.state.from == 'Mph' && this.state.to == 'Mph') {
        this.setState({
          ValueB: value,
        });
        console.log('Mph TO Mph')
      } else if (this.state.from == 'Kph' && this.state.to == 'Kph') {
        this.setState({
          ValueB: value,
        });
        console.log('Kph TO Kph')
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
                <Picker.Item label="Speed Converter" value="Speed" />
                <Picker.Item label="Currency Converter" value="Currency" />
                <Picker.Item label="Distance Converter" value="Distance" />
                <Picker.Item label="Measure Converter" value="Measure" />
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
                <Picker.Item label="Mph" value="Mph" />
                <Picker.Item label="Kph" value="Kph" />
                <Picker.Item label="Knots" value="Knots" />
                <Picker.Item label="MPS" value="MPS" />
              </Picker>
              <Picker
                selectedValue={this.state.to}
                style={styles.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue,'picker2')}
              >
                <Picker.Item label="Mph" value="Mph" />
                <Picker.Item label="Kph" value="Kph" />
                <Picker.Item label="Knots" value="Knots" />
                <Picker.Item label="MPS" value="MPS" />

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
buttonContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
},
button:{
    height:deviceHeight/14,
    width:(3*deviceWidth)/8,
    backgroundColor: '#b734cf',

    borderRadius:5,
    borderColor:'red',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
},
buttonText:{
    fontSize:deviceHeight/22
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

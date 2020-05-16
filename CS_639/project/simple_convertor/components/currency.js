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
import axios from 'axios';
// import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class Currency extends Component {
    constructor(props){
        super(props);
    }
    state = {
        
        ValueA: '0',
        ValueB: '0',
        from: 'USD',
        to: 'INR',
        exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
    };

    //   Other conversion functions
    converterA = (value) => {
        this.setState({
            ValueA: value,
        })
        axios
            .get(`http://api.openrates.io/latest?base=${this.state.from}&symbols=${this.state.to}`)
            .then(response => {
                this.setState({

                    ValueB: String((parseInt(value) * parseFloat(response.data.rates[this.state.to])).toFixed(2)),
                })

            })
            .catch(error => {
                console.log("opps", error.message);
            })


    };
    converterB (value) {
        this.setState({
            ValueB: value,
        })
        axios
            .get(`http://api.openrates.io/latest?base=${this.state.to}&symbols=${this.state.from}`)
            .then(response => {
                this.setState({

                    ValueA: String((parseInt(value) * parseFloat(response.data.rates[this.state.from])).toFixed(2)),
                })

            })
            .catch(error => {
                console.log("opps", error.message);
            })


    }
    navigator (value) {
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
                                onValueChange={(value)=> this.navigator(value)}
                            >
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
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
                                onValueChange={(itemValue) => this.setState({ from: itemValue })}
                            >
                                <Picker.Item label="USD Dollar" value="USD" />
                                <Picker.Item label="Indian Rupee" value="INR" />
                                <Picker.Item label="Euro" value="EUR" />
                                <Picker.Item label="Austrailan Dollar" value="AUD" />
                                <Picker.Item label="Canadian Dollar" value="CAD" />
                                <Picker.Item label="Japanese Yen" value="JPY" />
                                <Picker.Item label="New Zeland Dollar" value="NZD" />
                                <Picker.Item label="Russian Ruble" value="RUB" />
                                <Picker.Item label="Honk Kong Dollar" value="HKD" />
                            </Picker>
                            <Picker
                                selectedValue={this.state.to}
                                style={styles.picker}
                                onValueChange={(itemValue) => this.setState({ to: itemValue })}
                            >
                                <Picker.Item label="USD Dollar" value="USD" />
                                <Picker.Item label="Indian Rupee" value="INR" />
                                <Picker.Item label="Euro" value="EUR" />
                                <Picker.Item label="Austrailan Dollar" value="AUD" />
                                <Picker.Item label="Canadian Dollar" value="CAD" />
                                <Picker.Item label="Japanese Yen" value="JPY" />
                                <Picker.Item label="New Zeland Dollar" value="NZD" />
                                <Picker.Item label="Russian Ruble" value="RUB" />
                                <Picker.Item label="Honk Kong Dollar" value="HKD" />

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
                                onChangeText={this.converterA}
                            />


                        </View>
                        <View style={styles.inputBoxContainer}>
                            <View style={styles.currencyValueContainer}>
                                <Text style={styles.CurrencyValue}>
                                    {this.state.to}
                                </Text>
                            </View>
                            <TextInput
                                style={styles.inputBox}
                                keyboardType={'numeric'}
                                value={this.state.ValueB}
                                onChangeText={(value)=>this.converterB(value)}
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

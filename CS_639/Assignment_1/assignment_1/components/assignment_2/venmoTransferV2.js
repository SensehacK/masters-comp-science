import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export class VenmoTransfer extends Component {
  state = {
    amount: '0.00',
  };

  render() {
    return (
      //   This code is tested with real device and Xcode Simulator.
      // Link https://github.com/SensehacK/masters-comp-science/blob/master/CS_639/Assets/Screenshots/Venmo%20Screen.png
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Transfer Balance</Text>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceType}>Amount</Text>
          <View style={styles.balanceContainerAmount}>
            <Text style={styles.formFieldCurrency}>$</Text>
            <TextInput
              style={styles.formFieldValue}
              onChangeText={amount => this.setState({amount})}
              value={this.state.amount}
            />
          </View>
          {/* <Text style={styles.balanceNum}>$20.00</Text> */}
          <Text style={styles.balanceText}>
            {'Your Venmo balance is ' + '$' + this.state.amount}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardContainerText}> Debit Card </Text>
            <Text style={styles.cardContainerText}> $0.25 Fee ></Text>
          </View>

          <View style={styles.nextButton}>
            <TouchableHighlight
              onPress={() => {
                alert(
                  'You have successfully transferred $' + this.state.amount,
                );
              }}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#0099cc',
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

  balanceContainerAmount: {
    flexDirection: 'row',
    color: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  formFieldValue: {
    height: 70,
    color: 'brown',
    fontSize: 65,
  },

  formFieldCurrency: {
    height: 70,
    color: 'brown',
    fontSize: 65,
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
    margin: 20,
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

export default VenmoTransfer;

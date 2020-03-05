import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export class FoodOrder extends Component {
  state = {
    foodOrder: 'burger',
    drinkOrder: 'root beer',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Food Order</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={foodOrder => this.setState({foodOrder})}
          value={this.state.foodOrder}
        />
        <Text style={styles.title}>Drink Order</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={drinkOrder => this.setState({drinkOrder})}
          value={this.state.drinkOrder}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
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

  textInput: {
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

export default FoodOrder;

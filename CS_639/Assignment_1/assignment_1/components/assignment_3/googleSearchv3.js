import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

export class GoogleSearchV3 extends Component {
  state = {
    searchText: '',
  };

  render() {
    return (
      //   This code is tested with real device and Xcode Simulator.
      // Link https://github.com/SensehacK/masters-comp-science/blob/master/CS_639/Assets/Screenshots/Venmo%20Screen.png

      <View style={styles.container}>
        <View style={styles.googleContainer}>
          <Image
            style={styles.googleLogo}
            source={{
              uri:
                'https://codehs.com/uploads/b61b04781980ec2d29f8083d531cc5f8',
            }}
          />
        </View>

        <View style={styles.balanceContainer}>
          <TextInput
            style={styles.formFieldValue}
            onChangeText={searchText => this.setState({searchText})}
            value={this.state.searchText}
          />
          <View style={styles.searchCont}>
            <TouchableHighlight
              onPress={() => {
                alert('You have searched for ' + this.state.searchText);
              }}>
              <Image
                style={styles.searchIcon}
                source={{
                  uri:
                    'https://codehs.com/uploads/55c6938d3d45ecfb8a32916545f27306',
                }}
              />
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
  googleContainer: {
    marginTop: 70,
    height: 250,
  },

  googleLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#0099cc',
    margin: 30,
    width: 350,
    height: 150,
  },

  balanceContainer: {
    flexDirection: 'row',
    height: 650,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  formFieldValue: {
    borderColor: 'black',
    borderBottomStartRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 3,
    width: 300,
    height: 70,
    color: 'brown',
    fontSize: 65,
  },

  searchCont: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },

  searchIcon: {
    margin: 10,
    width: 50,
    height: 50,
  },
});

export default GoogleSearchV3;

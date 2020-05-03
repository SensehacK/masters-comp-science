import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
  Dimensions,
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class SnapchatLoginV4 extends Component {
  state = {
    logIn: 'LOG IN',
    signUp: 'SIGN UP',

    url: 'https://codehs.com/uploads/e6a75f14f57912fe8bd1722a30b98942',
  };
  logIn = () => {
    this.setState({
      url: 'https://codehs.com/uploads/e6a75f14f57912fe8bd1722a30b98942',
      logIn: 'Woo hoo, you logged in!',
      signUp: 'SIGN UP',
    });
  };
  signUp = () => {
    this.setState({
      url: 'https://codehs.com/uploads/926e7c484935e958de5b6bcfba56539b',
      logIn: 'LOG IN',
      signUp: 'Yeah, Sign you Up',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.yellowContainer}>
          <Image style={styles.snapImg} source={{uri: this.state.url}} />
        </View>

        <TouchableHighlight onPress={this.logIn}>
          <View style={styles.redContainer}>
            <Text>{this.state.logIn}</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.signUp}>
          <View style={styles.blueContainer}>
            <Text>{this.state.signUp}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },
  yellowContainer: {
    height: deviceHeight / 1.23,
    backgroundColor: '#fffc00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    height: deviceHeight / 10.5,
    backgroundColor: '#ff0049',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  blueContainer: {
    height: deviceHeight / 10.5,
    backgroundColor: '#00a9ff',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  snapImg: {
    height: deviceHeight / 12,
    width: deviceWidth / 7,
  },
});

export default SnapchatLoginV4;

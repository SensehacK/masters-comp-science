import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

export default class BackgroundImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={{
            uri:
              'https://raw.githubusercontent.com/developerinsider/developer-insider-content/master/Post%20Images/iOS%20Insider/Swift/swift-logo-hero.jpg',
          }}>
          <View style={styles.textContainer}>
            <Text style={styles.paragraph}>Hello, SensehacK!</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    height: 900,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textContainer: {
    marginTop: 50,
  },

  paragraph: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Courier New',
  },
});

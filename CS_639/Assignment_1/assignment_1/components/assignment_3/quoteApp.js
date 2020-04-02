import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  AppRegistry,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default class QuoteApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            alert(
              'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
            );
          }}>
          <Text style={styles.paragraph}>Martin Luther King</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

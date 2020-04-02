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

export default class ButtonImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            alert('Rickity Rick Son!"');
          }}>
          <Image
            source={{
              uri:
                'https://comicvine1.cbsistatic.com/uploads/original/10/101435/5985647-rick%2Band%2Bmorty%2Bfor%2Ba%2Bhundred%2Byears%2Brick%2Band%2Bmorty%2B_406a982d46ccc523799e6aef45080387.png',
            }}
            style={{height: 300, width: 300}}
          />
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

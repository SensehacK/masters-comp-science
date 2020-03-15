import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, Image} from 'react-native';

export class ImageInsertion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://static.codehs.com/img/courses/introkarel/1.png',
          }}
          style={{height: 445, width: 200}}
        />
        <Image
          style={styles.musicButtons}
          source={{
            uri: 'https://static.codehs.com/img/courses/introkarel/2.png',
          }}
          style={{height: 200, width: 250}}
        />
        <Image
          source={{
            uri: 'https://static.codehs.com/img/courses/introkarel/3.png',
          }}
          style={{height: 200, width: 200}}
        />
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

  musicButtons: {
    height: 50,
    width: 50,
  },
});

export default ImageInsertion;

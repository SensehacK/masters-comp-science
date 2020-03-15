import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

const SnapchatLoginV3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.yellowBlock}>
        <Image
          source={{
            uri: 'https://codehs.com/uploads/c799accde67e1fd3bbd699119b4e1c83',
          }}
          style={{height: 100, width: 100, resizeMode: 'center'}}
        />
      </View>

      <TouchableHighlight
        onPress={() => {
          alert('You have successfully logged in.');
        }}>
        <View style={styles.redBlock}>
          <Text>LOG IN</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          alert('You have successfully signed up.');
        }}>
        <View style={styles.blueBlock}>
          <Text>SIGN UP</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#fffc00',
  },

  yellowBlock: {
    backgroundColor: '#fffc00',
    height: 730,
    width: 414,
    alignItems: 'center',
    justifyContent: 'center',
  },

  redBlock: {
    color: '#ff0049',
    backgroundColor: '#ff0049',
    width: 414,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },

  blueBlock: {
    color: '#00a9ff',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a9ff',
    width: 414,
  },
});

export default SnapchatLoginV3;

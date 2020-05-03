import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class SpellChecker extends Component {
  state = {
    string: '',
  };

  _handleTextChange = string => {
    this.setState({string});
  };
  spellChecker = () => {
    this.setState({
      string: this.state.string
		.replace('hi', 'Hey')
		.replace('occured', 'occurred')
		.replace('beleive', 'believe')
        .replace('widt', 'with')
        .replace('demotavate', 'demotivate')
        .replace('bye', 'Goodbye')
        .replace('untill', 'until')
        .replace('gormint', 'Government')
       
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={{
            uri: 'https://codehs.com/uploads/0d1cb67c7b91138b1aacd195efc80945',
          }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Spell Checker</Text>
          </View>

          <View style={styles.inputBox}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true}
                value={this.state.string}
                onChangeText={this._handleTextChange}
              />
            </View>
          </View>

          <TouchableHighlight onPress={this.spellChecker}>
            <View style={styles.spellButton}>
              <Text style={styles.spellText}>Checker</Text>
            </View>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },
  background: {
    width: deviceWidth,
    height: deviceHeight,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: deviceHeight / 4,
    width: deviceWidth,
  },
  headerText: {
    fontSize: deviceHeight / 14,
    fontWeight: 'bold',
  },
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: deviceWidth / 1.3,
    height: deviceHeight / 1.8,
    borderWidth: 3,
    borderColor: 3,
  },
  textInput: {
    padding: 5,
    fontSize: deviceHeight / 22,
    height: deviceHeight / 1.8,
  },
  spellButton: {
    height: deviceHeight / 13,
    width: deviceWidth / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin: 20,
    marginLeft: 34,
  },
  spellText: {
    fontSize: deviceHeight / 22,
    color: 'white',
  },
});

export default SpellChecker;

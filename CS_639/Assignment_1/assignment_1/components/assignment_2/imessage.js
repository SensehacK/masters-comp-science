import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class IMessage extends Component {
  state = {
    recipient: ' ',
    message: ' ',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>New Message</Text>
          </View>
          <View style={styles.cancelBox}>
            <Text style={styles.blueText}>Cancel</Text>
          </View>
        </View>
        <View style={styles.bar}>
          <View style={styles.recipientBox}>
            <Text style={styles.recipientText}>To:</Text>
          </View>
          <TextInput
            style={styles.recipientInput}
            onChangeText={recipient => this.setState({recipient})}
            value={this.state.recipient}
          />
        </View>
        <View style={styles.whiteBox}></View>
        <View style={styles.bar}>
          <TextInput
            style={styles.messageInput}
            onChangeText={message => this.setState({message})}
            value={this.state.message}
          />
          <TouchableHighlight
            style={styles.sendBox}
            onPress={() => {
              alert(
                this.state.recipient +
                  ' received your message: ' +
                  this.state.message,
              );
            }}>
            <Text style={styles.blueText}>Send</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bar: {
    flexDirection: 'row',
  },
  titleBox: {
    width: 160,
    height: 75,
    justifyContent: 'center',
    backgroundColor: '#edeceb',
  },
  titleText: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Arial',
  },
  cancelBox: {
    height: 75,
    width: 65,
    justifyContent: 'center',
    backgroundColor: '#edeceb',
  },
  blueText: {
    color: 'blue',
    fontSize: 10,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  recipientBox: {
    height: 30,
    width: 50,
    backgroundColor: '#edeceb',
    justifyContent: 'center',
    borderTopColor: '#a19f9d',
    borderTopWidth: 1,
  },
  recipientText: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Arial',
    color: '#a19f9d',
  },
  recipientInput: {
    height: 30,
    width: 175,
    fontSize: 16,
    backgroundColor: '#edeceb',
    borderTopColor: '#a19f9d',
    borderTopWidth: 1,
  },
  whiteBox: {
    height: 260,
  },
  messageInput: {
    height: 30,
    width: 200,
    fontSize: 10,
    borderColor: '#a19f9d',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 10,
  },
  sendBox: {
    height: 30,
    width: 50,
    justifyContent: 'center',
  },
});

// iMessage

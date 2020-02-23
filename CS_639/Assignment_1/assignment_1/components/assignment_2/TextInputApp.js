import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, StyleSheet} from 'react-native';

export class TextInputApp extends Component {
  state = {
    name: 'Mikaela',
    age: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />
        <Text style={styles.title}>Age</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={age => this.setState({age})}
          value={this.state.age}
        />

        <View style={styles.info}>
          <Text style={styles.title}> Info Entered </Text>
          <Text style={styles.name}>Name: {this.state.name}</Text>
          <Text style={styles.age}>Age: {this.state.age}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  textInput: {
    height: 50,
    width: 300,
    borderWidth: 1,
    color: 'brown',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 50,
  },
  name: {
    fontSize: 25,
    backgroundColor: 'gray',
    margin: 10,
  },
  age: {
    fontSize: 25,
    backgroundColor: 'gray',
    margin: 10,
  },
  info: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    // marginTop: 100,
  },
});

export default TextInputApp;

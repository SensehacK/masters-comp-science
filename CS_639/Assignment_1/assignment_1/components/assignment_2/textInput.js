import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  AppRegistry,
} from 'react-native';

const TextInputC = () => {
  state = {
    name: 'Mikaela',
    age: '45',
  };

  const [items, setItems] = useState({
    name: 'Mik',
  });

  const setState2 = textValue => {
    setItems(textValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.header}>Name </Text>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={name => this.setState({name})}
        value={this.state.name}
      />
      <View style={styles.age}>
        <Text style={styles.header}>Age </Text>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={age => this.setState({age})}
        value={this.state.age}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 25,
    backgroundColor: 'gray',
    margin: 50,
  },

  age: {
    fontSize: 25,
    backgroundColor: 'gray',
    margin: 50,
  },

  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    // marginTop: 100,
  },

  textInput: {
    height: 50,
    width: 300,
    borderWidth: 1,
    color: 'brown',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default TextInputC;

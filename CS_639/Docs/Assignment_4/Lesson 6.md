As a result of what I learned in this unit I can

I learned about the state control overall with how it works in react.

What was hard?

Updating state with the events

What was easy?

Defining states with their value

Three things I remember

state
state updating
event handling

Two things I noticed
string states management
onpress method for updating states.

One thing I fully understand is
State usage in the project overall.

This is one sample of my code
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
state = {
myState: 'My name is?'
}
  
 updateState = () => {
this.setState({
myState: 'Kautilya Save!'
})
}
  
 render() {
return (
<View style={styles.container}>
<Text
                    style={styles.paragraph}
                    onPress = {this.updateState}
                >
{this.state.myState}
</Text>
</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: 'navy',
},
paragraph: {
color: 'white',
fontSize: 20,
textAlign: 'center',
}
});

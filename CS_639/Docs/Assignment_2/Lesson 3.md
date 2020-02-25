As a result of what I learned in this unit I can
I learned that hybrid app development is still in infant stage and debugging could be really tiresome.

What was hard?
I feel that transitioning from Expo web app towards xcode react-native tools is more harder to understand and apply the concepts accordingly.

What was easy?
It was easy to use text input but changing state was not easily understandable. TouchHighlight was also easy to wrap other components of View and child component.

Three things I remember
Text Input is what I liked the most.
Parent component and child components.
CSS centering stuff understood now.

Two things I noticed
It is hard to translate the code for Expo to React Native Xcode.
React Native is still faster than angular.

One thing I fully understand is
Text input is great component to be used for taking input from end user.

This is one sample of my code
import React from 'react';
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
age: '',
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
color: 'white',
fontSize: 20,
textAlign: 'center',
},
});

export default TextInputC;

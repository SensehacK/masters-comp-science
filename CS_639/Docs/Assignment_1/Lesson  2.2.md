As a result of what I learned in this lesson I can

What was hard?
CSS is pretty tough for me. Visualizing the CSS part was very hard for me, in terms of CSS Grid or Flex.

What was easy?
CSS basic stuff was easy to implement and involved easy migration from basic CSS.

Three things I remember
CSS are stored under variable names.
React Native CSS implementation is very much fast.
React Native CSS Flex - Playgrounds aids to visualize the CSS layout.

Two things I noticed
React Native is very much faster than Angular Ionic framework.
But it is not fully feature as of now.

One thing I fully understand is
We can have stylesheet names identifier and also multiple stylesheet

This is one sample of my code
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
render() {
return (
<View style= {styles.container}>
<View style= {styles.topTextContainer}>
<Text style= {styles.topText}>
Hello, Earth!
</Text>
</View>
<View style= {styles.bottomTextContainer}>
<Text  style= {styles.bottomText}>
Hello, Mars!
</Text>
</View>
</View>
);
}
}

// Don't change anything below this point!
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'lightpink',
},
topTextContainer: {
height: 200,
width: 300,
backgroundColor: 'blue',
},
bottomTextContainer: {
height: 100,
width: 100,
backgroundColor: 'lightblue',
},
topText: {
color: 'white',  
 fontSize: 25,
},
bottomText: {
color: 'black',
fontSize: 25,
}
});

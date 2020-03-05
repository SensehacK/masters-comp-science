# Lesson 4

Unit Reflection

## As a result of what I learned in this unit I can

I learned about the flex layout overall with how it works on different phones.

## What was hard?

Visualizing flex layout on phone was a bit harder than expected. I would love to learn more about how to visualize the data and layouts on react native.

## What was easy?

Using image buttons is easier than expected.

## Three things I remember

Image buttons
Flex layout
background image

## Two things I noticed

Dimensions is nice to control size of the layout.
Using layouts could be a game changer for different mobile phone sizes.

## One thing I fully understand is

Using button images fully.

## This is one sample of my code

```javascript
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  AppRegistry,
  TouchableHighlight,
  Alert
} from "react-native";
import Constants from "expo-constants";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            alert('Rickity Rick Son!"');
          }}
        >
          <Image
            source={{
              uri:
                "https://comicvine1.cbsistatic.com/uploads/original/10/101435/5985647-rick%2Band%2Bmorty%2Bfor%2Ba%2Bhundred%2Byears%2Brick%2Band%2Bmorty%2B_406a982d46ccc523799e6aef45080387.png"
            }}
            style={{ height: 300, width: 300 }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
```

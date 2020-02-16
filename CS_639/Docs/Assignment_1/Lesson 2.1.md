What was hard?

Getting the environment working for the first time was hard for free.

Due to various dependencies involving react Native, iOS version, Mac OS version and Xcode version conflict.

What was easy?

The browser environment was easy to setup but I always find split view easy to understand.

Three things I remember

Parent view component, Multiple Text components, Scan with Expo app easy to use.

Two things I noticed

Double quotes in CSS and % not working for few stylesheets.

CSS having component variables which needs to be imported.

One thing I fully understand is

How to import components and what is there purpose.

This is one sample of my code

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Constants from 'expo-constants';
export default class App extends Component {
render() {
return (

        <View style={styles.container}>
            <Text>  Kautilya Save </Text>
            <Text> Mobile App Development </Text>
        </View>
        );
    }

}

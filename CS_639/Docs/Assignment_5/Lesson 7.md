As a result of what I learned in this unit I can

How buttons are important for navigation

What was hard?
visualizing the navigation with buttons on simulator and web expo.

What was easy?
syntax was easy to use

Three things I remember
Navbar types
Icon navbar is my favorite to utilize everywhere
Buttons navigation

Two things I noticed
image embedding in buttons
internally everything is a link

One thing I fully understand is
button navigation

This is one sample of my code
import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    // Initially, Welcome page is displayed
    state = {
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
    }));

    // When Info Page button is pressed, hide Welcome page and show Info page
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
    }));

    render() {
        return (
            <View style={styles.container}>

                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>
                            Welcome Sensehack
                        </Text>
                    </View>
                </View>

                {/*Info page screen layout here*/}
                <View style={{ display: this.state.infoPageDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.paragraph}>
                            visit https://sensehack.github.io/
                        </Text>
                    </View>
                </View>

                {/*Bottom nav bar shows on each screen*/}
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleWelcomePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Welcome
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleInfoPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Info
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
      );

}
}

const styles = StyleSheet.create({
container: {
height: deviceHeight,
width: deviceWidth,
},
contentContainer: {
height: 5\*(deviceHeight/6),
width: deviceWidth,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: 'lightblue',
},
title: {
fontSize: deviceHeight/10,
textAlign: 'center',
fontWeight: 'bold',
color: 'darkblue',
},
paragraph: {
fontSize: deviceHeight/20,
textAlign: 'center',
color: 'white',
},
navbarContainer: {
height: deviceHeight/6,
width: deviceWidth,
backgroundColor: 'darkblue',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
borderTopWidth: 10,
borderColor: 'white',
},
navButton: {
height: deviceHeight/14,
width: deviceWidth/4,
backgroundColor: 'white',
borderColor: 'lightblue',
borderWidth: 2,
alignItems: 'center',
justifyContent: 'center',
margin: 20,
},
navButtonText: {
fontSize: deviceHeight/40,
textAlign: 'center',
color: 'darkblue',
},

});

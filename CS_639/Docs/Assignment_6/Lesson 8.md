8.1 Conditionals and State Change
8.2 Conditionals using Parameters
8.3 Challenge: Scorekeeper Pt 6
8.4 Working with Conditionals Quiz

As a result of what I learned in this lesson I can
I learned about how state changes depending on conditions.

What was hard?
State management is very hard to keep track off with Xcode & iOS Simulator.

What was easy?
Expo is better in state management.

Three things I remember
Parameterized conditionals.
State management overall.
conditional with state management

Two things I noticed
iOS simulator with state management tracking is very exhausting on CPU processing of a laptop
Also debugging states in react native is bit difficult.

One thing I fully understand is
State management with conditionals attached towards it.

This is one sample of my code

```javascript
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {

    state = {
        colorRender: '',
        textRender: '',
    }

    selectColor = (color) => {
        if (color == 'Green') {
            this.setState({
                colorRender: 'https://codehs.com/uploads/61216fd2c5339e0482e94d543883013c',
                textRender: 'Alright!'
            })
        } else if (color == 'Yellow') {
            this.setState({
                colorRender: 'https://codehs.com/uploads/462dde5a6fad3e7b2da2ff278c5d97ad',
                textRender: 'Control!'
            })
        } else if (color == 'Warning') {
            this.setState({
                colorRender: 'https://codehs.com/uploads/0adb00eac3311dba67a84c2d139314a9',
                textRender: 'Freeze!'
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>

                    <TouchableHighlight
                        onPress={() => this.selectColor('Green')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonTextGreen}>
                                Green
                            </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => this.selectColor('Yellow')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonTextYellow}>
                                Yellow
                            </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => this.selectColor('Red')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonTextRed}>
                                Red
                            </Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <Text style={styles.lightText}>
                    {this.state.textRender}
                </Text>
                <Image
                    source={this.state.colorRender}
                    style={{ height: 350, width: 200 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 90,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextGreen: {
        fontSize: 20,
        color: 'green',
    },
    buttonTextYellow: {
        fontSize: 20,
        color: 'yellow',
    },
    buttonTextRed: {
        fontSize: 20,
        color: 'red',
    },
    lightText: {
        fontSize: 50,
        color: 'black',
        textAlign: 'center',
    },
});
```

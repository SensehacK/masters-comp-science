import React, { Component } from 'react'
import { View,Text } from 'react-native';
const abc = (props) => {

}
class Details extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen </Text>
            </View>
        )
    }
}
export default Details ;

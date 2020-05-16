import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

class Home_temp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let {navigation} = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Home Screen</Text>
                <View>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Details')}>
                        <Text>
                            Go to Details
</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default Home_temp;

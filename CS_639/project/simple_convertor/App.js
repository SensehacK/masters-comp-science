
import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import HomeStack from './routes/homestack';
import Converter from './converter';
import Currency from './components/currency';
import DistanceVC from './components/distance';
import TemperatureVC from './components/temperature';
import Home_temp from './routes/home_temp';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './routes/details';
import MeasureVC from './components/measure';
import SpeedVC from './components/speed';
import WeightVC from './components/weight';


const Stack = createStackNavigator();

const App = () => {
  
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Distance">
          <Stack.Screen name="Currency" component={Currency} />
          <Stack.Screen name="Distance" component={DistanceVC} />
          <Stack.Screen name="Measure" component={MeasureVC} />
          <Stack.Screen name="Speed" component={SpeedVC} />
          <Stack.Screen name="Temperature" component={TemperatureVC} />
          <Stack.Screen name="Weight" component={WeightVC} />


        </Stack.Navigator>
          
      </NavigationContainer>
      {/* <Component/> */}

    </Fragment >
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

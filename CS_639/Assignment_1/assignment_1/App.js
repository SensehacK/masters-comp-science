import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import Playground from './components/playground';
import Playground_2 from './components/playground_2';
import Rainbow from './components/rainbow';
import Flex from './components/flex';
import Nested from './components/nested_blocks';
import MyFavList from './components/myFavList';
import NewsArticle from './components/newsArticle';
import GoogleLogo from './components/googleLogo';
import SnapchatLogin from './components/snapchatLogin';
import Venmo from './components/venmoTransfer';
import ScoreKeeper from './components/scoreKeeper';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello Sensehack!</Text> */}
      {/* <Header title="Assignment 1" /> */}
      {/* <Playground />
      <Playground_2 /> */}
      {/* <Rainbow /> */}
      {/* <Flex /> */}
      {/* <Nested /> */}
      {/* <MyFavList /> */}
      {/* <NewsArticle /> */}
      {/* <GoogleLogo /> */}
      {/* <SnapchatLogin /> */}
      {/* <Venmo /> */}
      <ScoreKeeper />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,
  },
});

export default App;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  AppRegistry,
} from 'react-native';
import Header from './components/assignment_1/Header';
import Playground from './components/playground';
import Playground_2 from './components/playground_2';
import Rainbow from './components/assignment_1/rainbow';
import Flex from './components/assignment_1/flex';
import Nested from './components/assignment_1/nested_blocks';
import MyFavList from './components/assignment_1/myFavList';
import NewsArticle from './components/assignment_2/newsArticle';
import GoogleLogo from './components/assignment_1/googleLogo';
import SnapchatLogin from './components/assignment_2/snapchatLogin';
import Venmo from './components/assignment_1/venmoTransfer';
import ScoreKeeper from './components/main/scoreKeeper';
import TouchableButton from './components/assignment_2/touchableButton';
import HomeLogin from './components/assignment_2/homeLogin';
import TextInputC from './components/assignment_2/textInput';
import TextInputApp from './components/assignment_2/TextInputApp';
import IMessage from './components/assignment_2/imessage';
import GoogleSearch from './components/assignment_2/googleSearch';
import FeedbackForm from './components/assignment_2/feedbackForm';
import VenmoTransfer from './components/assignment_2/venmoTransferV2';
import ScoreKeeperV3 from './components/main/scoreKeeperV3.3';
import FoodOrder from './components/assignment_2/foodOrder';
import SnapchatLoginV3 from './components/assignment_3/snapchatLogin';
import MusicPlayer from './components/assignment_3/musicPlayer';
import GoogleSearchV3 from './components/assignment_3/googleSearchv3';
import BackgroundImage from './components/assignment_3/backgroundImage';
import MobileResume from './components/assignment_3/mobileResume';
import ButtonImage from './components/assignment_3/buttonImage';
import QuoteApp from './components/assignment_3/quoteApp';
import SpellChecker from './components/assignment_4/snapshotLoginV4';
import Counter from './components/assignment_4/counter';
import SpellChecker from './components/assignment_4/spellChecker';


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
      {/* <ScoreKeeper /> */}
      {/* <TouchableButton /> */}
      {/* <HomeLogin /> */}
      {/* <TextInputC /> */}
      {/* <TextInputApp /> */}
      {/* <IMessage /> */}
      {/* <GoogleSearch /> */}
      {/* <FeedbackForm /> */}
      {/* <VenmoTransfer /> */}
      {/* <ScoreKeeperV3 /> */}
      {/* <FoodOrder /> */}
      {/* <SnapchatLoginV3 /> */}
      {/* <MusicPlayer /> */}
      {/* <GoogleSearchV3 /> */}
      {/* <BackgroundImage /> */}
      {/* <MobileResume /> */}
      {/* <ButtonImage /> */}
      {/* <QuoteApp /> */}
      {/* <SnapchatLoginV4 /> */}
      {/* <Counter /> */}
      <SpellChecker />
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

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from 'react-native';

export class MobileResume extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resumeContainer}>
          <View style={styles.profileContainer}>
            <ImageBackground
              style={styles.profilePhoto}
              source={{
                uri:
                  'https://raw.githubusercontent.com/SensehacK/sensehack.github.io/master/assets/ogImg.png',
              }}
              style={{height: 500, width: 450}}>
              <View style={styles.profileTextContainer}>
                <Text style={styles.paragraph}>SensehacK!</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.resumeInfoContainer}>
            <View style={styles.resumeInfoSchool}>
              <Text style={styles.resumeField}>School</Text>
              <Text style={styles.resumeParagraph}>Pace</Text>
            </View>
            <View style={styles.resumeInfoWork}>
              <Text style={styles.resumeField}>Work</Text>
              <Text style={styles.resumeParagraph}>
                <Text style={styles.resumeField}>Infosys</Text> - iOS app dev,
                Web dev, Hybrid app dev, Full stack developer
              </Text>
            </View>
            <View style={styles.resumeInfoHobby}>
              <Text style={styles.resumeField}>Hobby</Text>
              <Text style={styles.resumeParagraph}>
                Technology, Photography, Writing
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resumeContainer: {},

  profileContainer: {},

  profilePhoto: {},

  resumeInfoContainer: {
    marginTop: 50,
  },

  background: {
    height: 900,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey',
  },

  textContainer: {
    marginTop: 50,
  },

  profileTextContainer: {
    marginTop: 50,
  },

  paragraph: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Courier New',
  },

  resumeField: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Courier New',
  },

  resumeParagraph: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Courier New',
  },

  resumeInfoSchool: {},
  resumeInfoWork: {},
  resumeInfoHobby: {},
});

export default MobileResume;

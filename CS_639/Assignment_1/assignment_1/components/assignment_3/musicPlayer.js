import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, AppRegistry} from 'react-native';

export class MusicPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Your Top Songs 2019</Text>

        <Text style={styles.song}>Love Yourz</Text>

        <Text style={styles.artist}>J.Cole</Text>

        <Image
          style={styles.albumArtwork}
          source={{
            uri:
              'https://static.vibe.com/files/article_images/j-cole-forest-hills-drive-cover.jpg',
          }}
        />

        <View style={styles.songTimesContainer}>
          <Text style={styles.time}>0:00</Text>

          <View style={styles.line}></View>

          <Text style={styles.time}>3:42</Text>
        </View>

        <View style={styles.playerControlsContainer}>
          <Image
            style={styles.arrows}
            source={{
              uri:
                'https://codehs.com/uploads/de00e9c8530c8309d09592b862bc8961',
            }}
          />
          <Image
            style={styles.pause}
            source={{
              uri:
                'https://codehs.com/uploads/ef5b99b661f0a16801d65ea0eeee385a',
            }}
          />
          <Image
            style={styles.arrows}
            source={{
              uri:
                'https://codehs.com/uploads/c6678f1b21a046cab77a2ad4c6280b36',
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  topText: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'white',
    paddingTop: 30,
    paddingBottom: 20,
  },
  song: {
    fontFamily: 'Arial',
    fontSize: 26,
    color: 'white',
    marginTop: 20,
  },
  artist: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#e9e9e9',
    marginTop: 5,
  },
  songTimesContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  time: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: 'white',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 200,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  playerControlsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  arrows: {
    margin: 25,
    height: 20,
    width: 30,
  },
  pause: {
    height: 70,
    width: 70,
  },

  albumArtwork: {
    margin: 30,
    height: 350,
    width: 350,
  },
});
export default MusicPlayer;

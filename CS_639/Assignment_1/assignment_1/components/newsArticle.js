import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NewsArticle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.articleHeading}>Save your Eyes in Digital Life!</Text>

      <Text style={styles.articleAuthor}>Kautilya Save</Text>

      <Text style={styles.articleContent}>
        In 21st century we have been surrounded by screens everywhere &
        excessive dependency on digital lifestyle could lead to weak eye sight
        or eye strain. This article would help you to reduce some symptoms
        related to headache & eye strains.
      </Text>

      <Text style={styles.articleSource}>
        https://medium.com/@kautilyasave/save-your-eyes-in-digital-life-d1269f50c06e
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
    backgroundColor: 'lightgrey',
  },
  articleHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    margin: 15,
    fontFamily: 'Helvetica',
  },
  articleAuthor: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    padding: 10,
    color: 'green',
    alignSelf: 'center',
  },
  articleContent: {
    fontSize: 25,
    fontFamily: 'Times New Roman',
    padding: 20,
    textAlign: 'justify',
    color: 'black',
  },
  articleSource: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    padding: 20,
    color: 'blue',
    fontStyle: 'italic',
    textAlign: 'left',
  },
});

export default NewsArticle;

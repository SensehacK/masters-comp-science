import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Nested = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.main}>
        <View style={styles.container1}>
          <View style={styles.middleView1}>
            <View style={styles.innerView1}></View>
          </View>
          <View style={styles.middleView2}>
            <View style={styles.innerView2}></View>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.middleView3}>
            <View style={styles.innerView3}></View>
          </View>
          <View style={styles.middleView4}>
            <View style={styles.innerView4}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'grey',
    flexWrap: 'wrap',
  },

  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    // margin: 100,
  },

  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    // margin: 50,
    // flexWrap: 'wrap',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  outerView: {
    width: 380,
    height: 380,
    backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  middleView1: {
    width: 150,
    height: 150,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleView2: {
    width: 150,
    height: 150,
    // flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleView3: {
    width: 150,
    height: 150,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleView4: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerView1: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
    // alignItems: 'center',
  },
  innerView2: {
    width: 75,
    height: 75,
    backgroundColor: 'green',
    // alignItems: 'center',
  },
  innerView3: {
    width: 75,
    height: 75,
    backgroundColor: 'yellow',
    // alignItems: 'center',
  },
  innerView4: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
    // alignItems: 'center',
  },
});

export default Nested;

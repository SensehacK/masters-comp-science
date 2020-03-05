import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, StyleSheet} from 'react-native';

export class FeedbackForm extends Component {
  state = {
    name: '',
    date: 'mm/dd/yyyy',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formFieldHeading}>
          <Text style={styles.formFieldHeadingText}>FeedbackForm</Text>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formFieldTitle}>Name</Text>
          <TextInput
            style={styles.formFieldValue}
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.formFieldTitle}>Date</Text>
          <TextInput
            style={styles.formFieldValue}
            onChangeText={date => this.setState({date})}
            value={this.state.date}
          />
        </View>
        <View style={styles.formFeedback}>
          <Text style={styles.formFeedbackTitle}>Feedback:</Text>
          <View style={styles.formTextBox}></View>
        </View>
        <View style={styles.formFeedbackButton}>
          <View style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'grey',
  },

  formFieldHeading: {
    height: 150,
    width: 414,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderBottomColor: 'black',
    borderBottomWidth: 10,
  },
  formFieldHeadingText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  formField: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    width: 414,

    alignItems: 'center',
  },

  formFieldTitle: {
    width: 100,
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: 10,
  },

  formFieldValue: {
    height: 50,
    width: 250,
    borderWidth: 1,
    color: 'brown',
    fontSize: 25,
    alignItems: 'flex-end',
    textAlign: 'center',
  },

  formFeedback: {
    width: 414,
    height: 350,
    // alignContent: 'flex-end',
    alignItems: 'center',
  },

  formFeedbackTitle: {
    textAlign: 'center',
    height: 50,
    fontSize: 40,
    margin: 30,
  },

  formTextBox: {
    height: 200,
    width: 380,
    borderWidth: 1,
    color: 'brown',
    fontSize: 20,
    textAlign: 'center',
  },

  formFeedbackButton: {
    alignItems: 'flex-end',
    height: 250,
  },

  submitButton: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#00a9ff',
    width: 150,
    margin: 15,
    borderWidth: 2,
    borderColor: 'black',
    // justifyContent: 'center',
    textAlign: 'center',
  },

  submitButtonText: {
    fontSize: 30,
    alignSelf: 'center',
    margin: 10,
  },
});

export default FeedbackForm;

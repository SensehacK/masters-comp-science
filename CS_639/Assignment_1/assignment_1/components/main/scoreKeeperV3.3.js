import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export class ScoreKeeperV3 extends Component {
  state = {
    data: [
      {
        id: 0,
        name: 'Team Name',
        score: '6',
      },
      {
        id: 1,
        name: 'Team Name',
        score: '4',
      },
      {
        id: 2,
        name: 'Team',
        score: '5',
      },
      {
        id: 3,
        name: 'Team Name',
        score: '2',
      },
    ],
  };

  setTeamName = (teamNo, teamName) => {
    const data = [...this.state.data];
    console.log('Team Name : ' + teamName, teamNo);
    // const index = data.indexOf(teamNo);
    // console.log('Team index : ' + index);
    console.log('Printing the whole array', data);

    data[teamNo].name = teamName;
    this.setState({data});
  };

  render() {
    return (
      //   This code is tested with real device and Xcode Simulator.
      // Link https://github.com/SensehacK/masters-comp-science/blob/master/CS_639/Assets/Screenshots/ScoreKeeper%20Screen.png

      <View style={styles.container}>
        <Text style={styles.header}>ScoreKeeper</Text>

        <View style={styles.teamContainer}>
          <View style={styles.teamContainer1}>
            <View style={styles.teamButton}>
              <Text style={styles.teamButtonText}>
                {this.state.data[0].name + ' ' + this.state.data[0].id}
              </Text>
            </View>
            <View style={styles.teamButton}>
              <Text style={styles.teamButtonText}>
                {this.state.data[1].name + ' ' + this.state.data[1].id}
              </Text>
            </View>
            <View style={styles.teamButton}>
              <Text style={styles.teamButtonText}>
                {this.state.data[2].name + ' ' + this.state.data[2].id}
              </Text>
            </View>
          </View>

          <View style={styles.teamContainer2}>
            <View style={styles.teamButton}>
              <TouchableHighlight
                onPress={() => {
                  alert('Add +7 to team ' + this.state.data[0].id);
                }}>
                <Text style={styles.teamButtonText}>
                  Score {this.state.data[0].score}
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.teamButton}>
              <TouchableHighlight
                onPress={() => {
                  alert('Add +3 to team ' + this.state.data[1].id);
                }}>
                <Text style={styles.teamButtonText}>
                  Score {this.state.data[1].score}
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.teamButton}>
              <TouchableHighlight
                onPress={() => {
                  alert('Add +1 to team ' + this.state.data[2].id);
                }}>
                <Text style={styles.teamButtonText}>
                  Score {this.state.data[2].score}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={styles.teamContainerInput}>
          <Text style={styles.formFieldTitle}>Enter Details</Text>
          <View style={styles.formField}>
            <Text style={styles.formFieldName}>Team1: </Text>
            <TextInput
              style={styles.formFieldValue}
              onChangeText={team => this.setTeamName(0, team)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formFieldName}>Team2: </Text>
            <TextInput
              style={styles.formFieldValue}
              onChangeText={team => this.setTeamName(1, team)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formFieldName}>Team3: </Text>
            <TextInput
              style={styles.formFieldValue}
              onChangeText={team => this.setTeamName(2, team)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },

  header: {
    marginTop: 70,
    textAlign: 'center',
    fontSize: 65,
    color: 'black',
    fontWeight: 'bold',
  },

  formFieldTitle: {
    color: 'brown',
    fontSize: 25,
    alignSelf: 'center',
    margin: 20,
  },

  formField: {
    flexDirection: 'row',
    height: 50,
    width: 414,
    alignItems: 'center',
  },

  formFieldName: {
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

  teamContainer: {
    flexDirection: 'row',
  },

  teamContainerInput: {
    flexDirection: 'column',
  },

  teamContainer1: {
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
  },

  teamContainer2: {
    flexDirection: 'column',
    color: 'black',
  },

  teamButton: {
    height: 80,
    width: 150,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },

  teamButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ScoreKeeperV3;

import {StyleSheet} from 'react-native';
import {
	Dimensions,
  } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
	backgroundColor: '#00C6FF'
   },

  backgroundColor: {
    backgroundColor: '#00C6FF',
  },

  buttonMain: {
	flexDirection: "row",
	justifyContent: "space-around",
	alignItems: "center",
	margin : "auto"
  },


  buttonInContainer: {
    alignItems: 'center',
	
  },
  buttonContainer: {
    height: deviceHeight / 10,
    width: (3 * deviceWidth) / 7,
    backgroundColor: 'blue',
    marginHorizontal: 'auto',
    marginTop: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: deviceHeight / 30,
    color: 'white',
  },
});
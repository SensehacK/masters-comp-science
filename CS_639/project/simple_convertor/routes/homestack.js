import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Currency from '../components/currency';
import DistanceVC from '../components/distance';



const screens ={
    Currency_Converter:{
        screen: Currency
    },
    Temperature:{
        screen: DistanceVC
    }
}


const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);
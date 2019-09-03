import HomeScreen from './screens/Home';
import AutoDrivers from './screens/AutoDrivers';
import College from './screens/CollegeBus';
import CBDetails from './screens/CollegeBusDetails';
import Buses from './screens/Buses';
import pvt from './screens/PvtBus';
import pvtd from './screens/PvtBusDetails';
import trains from './screens/Train';
import train from './screens/AllTrains';
import splash from './screens/Splash';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Auto: {screen: AutoDrivers},
  College: {screen: College},
  CBD: {screen: CBDetails},
  Buses: {screen: Buses},
  PvtBus: {screen: pvt},
  PvtBusDetails: {screen: pvtd},
  Train: {screen:trains},
  AllTrain: {screen:train},
  splash: {screen: splash}


},
{
  initialRouteName:'splash',
  headerMode: 'none'
}
);

const App = createAppContainer(MainNavigator);

export default App;
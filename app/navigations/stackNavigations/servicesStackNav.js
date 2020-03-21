import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ServicesScreen from '../../screens/servicesScreen';
import ServiceDetailsScreen from '../../screens/serviceDetailsScreen';

// this our only navigation stack which contains only 2 screens
// search services screen and service details screen

const servicesStackNav = createStackNavigator({
  ServicesScreen: {
    screen: ServicesScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Search For Services',
    }),
  },
  ServiceDetailsScreen: {
    screen: ServiceDetailsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Service Details',
    }),
  },
  initialRouteName: 'ServicesScreen',
});

export default createAppContainer(servicesStackNav);

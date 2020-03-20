import {Dimensions} from 'react-native';
import {FAKED_SERVICES_DATA} from './SERVICES_DATA';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const SERVICES = FAKED_SERVICES_DATA;

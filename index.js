/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './app/main';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['VirtualizedLists should never be ']); //just to hide the warnnig
AppRegistry.registerComponent(appName, () => App); //root index of the project

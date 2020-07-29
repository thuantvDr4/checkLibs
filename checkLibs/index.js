/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import Main from './src/Main';
import CheckI18n from './src/CheckI18n';
import CustomMap from './src/CustomMap';
import RNFs from './src/RN-fs'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RNFs);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import {RickAndMortyApp} from './src/RickAndMortyApp';

AppRegistry.registerComponent(appName, () => RickAndMortyApp);

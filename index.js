/** @format */
 import { Navigation } from "react-native-navigation";
import {AppRegistry} from 'react-native';
import App from './App';
import  SplashScreen  from "./Script/SplashScreen";
import  HomeScreen  from './Script/HomeScreen';

//import  SideMenu  from "./Script/SideMenu";
import  SecondScreen  from "./Script/SecondScreen";
import {name as appName} from './app.json';

Navigation.registerComponent(appName, () => App);
Navigation.registerComponent('SplashScreen', () => SplashScreen);
Navigation.registerComponent('HomeScreen', () => HomeScreen);
//Navigation.registerComponent('SideMenu', () => SideMenu); 
Navigation.registerComponent('SecondScreen', () => SecondScreen);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Navigation} from 'react-native-navigation';

import  SplashScreen  from "./Script/SplashScreen";
import  App  from './App';


Navigation.setDefaultOptions( { 
      statusBar: { 
        visible: true, 
        style: 'light',
        backgroundColor:"#0288D1",
         },
         } );

Navigation.setRoot({
  root: {
    stack: {
      id:'SplashScreen',
      children: [{
        component: {
          name: 'SplashScreen',
          passProps: {
            //text: 'stack with one child'
          }
        }
      }],
      options: {
        statusBar: {
        visible: true,
        drawBehind: false,
         },
    topBar: {
    visible: false,
    drawBehind: true,
    animate: true,
  }
        // topBar: {
        //    visible: false,
        //   // title: {
        //   //   text: 'Welcome screen'
        //   // }
        // }
      }
    }
  }
});





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports=App;

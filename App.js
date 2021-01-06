import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabMenu} from './navigation/bottomTabMenu'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabMenu />
      </NavigationContainer>
    )
  }
}
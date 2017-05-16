import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import TextInputComponent from './app/components/TextInputComponent/TextInputComponent'
import SliderComponent from './app/components/SliderComponent/SliderComponent'
import PickerComponent from './app/components/PickerComponent/PickerComponent'

export default class mymobileapp extends Component
{
  render()
  {
    return(
      <View>
      <TextInputComponent/>
      <SliderComponent />
      <PickerComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('mymobileapp', ()=>mymobileapp);
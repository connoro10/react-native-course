import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import SimpleComponent1 from './app/components/SimpleComponent1/SimpleComponent1'

export default class mymobileapp extends Component
{
  render()
  {
    return(
      <View>
      <SimpleComponent1 />
      </View>
    )
  }
}

AppRegistry.registerComponent('mymobileapp', ()=>mymobileapp);
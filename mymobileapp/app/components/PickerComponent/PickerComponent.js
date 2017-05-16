import React, {Component} from 'react';
import {AppRegistry, Text, View, Picker} from 'react-native';

export default class PickerComponent extends Component
{
	constructor(){
		super();
		this.state = {
      category: 'Technology'
		}
	}

  render()
  {
    return(
      <View>
      <Picker />
      <Text>Picker Component</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('PickerComponent', ()=>PickerComponent);
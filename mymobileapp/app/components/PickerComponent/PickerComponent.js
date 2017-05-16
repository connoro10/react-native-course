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

  onValueChange(value){
    this.setState({category: value});
  }

  render()
  {
    return(
      <View>
      <Picker
      selectedValue = {this.state.category}
      onValueChange={this.onValueChange.bind(this)}
      prompt="Category"
      enabled={true}
      mode="dropdown"
      >
        <item label ="Technology" value="Technology"/>
        <item label ="Business" value="Business"/>
        <item label ="Cooking" value="Cooking"/>
      </Picker>
      <Text>Selected Category: {this.state.category}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('PickerComponent', ()=>PickerComponent);
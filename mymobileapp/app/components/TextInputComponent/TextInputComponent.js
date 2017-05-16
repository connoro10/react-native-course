import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput} from 'react-native';

export default class TextInputComponent extends Component
{
	constructor(props){
		super(props);
		this.state = {
      value: this.props.value
		}
	}

  static defaultProps = {
    value: 'Hello porpd'
  }

  onChangeText(value){
    this.setState({value: value});
  }

   onSubmitEditing(e){
    console.log('on submit editnig called' + e);
  }

  onBlur(e){
    console.log('on blur called');
  }

  onFocus(e){
    console.log('on focus called');
  }

  render()
  {
    return(
      <View>
      <TextInput
        placeholder="type something"
        value={this.state.value}
        maxLength = {11}
        selectionColor = 'red'
        //selectTextOnFocus = {true}
        //editable = {false}
        onFocus = {(e) => this.onFocus(e)}
        onBlur = {(e) => this.onBlur(e)}
        onChangeText = {(value)=>this.onChangeText(value)}
        onSubmitEditing = {(e) => this.onSubmitEditing(e.nativeEvent.text)}
      />
      <Text>{this.state.value}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('TextInputComponent', ()=>TextInputComponent);
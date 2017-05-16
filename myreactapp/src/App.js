import React, { Component } from 'react';
import './App.css';
import Component1 from './Components/Component';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Component1 message="Hi there" />
      <Component1 message="Ho there" />
      <Component1 message="Hey there" />
      </div>
    );
  }
}

export default App;

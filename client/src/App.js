import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Fisrt React App</h1>
        <p>Welcome :)</p>
        <Ninjas name="Ryu" age="25" belt="black"/>
        <Ninjas name="yoshi" age="30" belt="black"/>
      </div>
    );
  }
}

export default App;
